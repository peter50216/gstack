import { describe, expect, test } from "bun:test";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const SCRIPT = path.join(ROOT, "bin", "gstack-repo-mode");

function mkTmpDir(prefix: string): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function run(cmd: string, args: string[], cwd: string, env: NodeJS.ProcessEnv = {}) {
  return spawnSync(cmd, args, {
    cwd,
    env: { ...process.env, ...env },
    encoding: "utf8",
    stdio: "pipe",
  });
}

describe("gstack-repo-mode", () => {
  test("reads fresh cache on Linux without BSD stat arithmetic errors", () => {
    const home = mkTmpDir("repo-mode-home-");
    const workdir = mkTmpDir("repo-mode-work-");
    try {
      execFileSync("jj", ["git", "init", "--colocate"], { cwd: workdir });
      execFileSync("jj", ["git", "remote", "add", "origin", "https://github.com/example/repo.git"], { cwd: workdir });

      const cacheDir = path.join(home, ".gstack", "projects", "example-repo");
      fs.mkdirSync(cacheDir, { recursive: true });
      fs.writeFileSync(path.join(cacheDir, "repo-mode.json"), '{"mode":"solo","computed":"2026-05-13T00:00:00Z"}\n');

      const result = run(SCRIPT, [], workdir, { HOME: home });
      expect(result.status).toBe(0);
      expect(result.stderr).toBe("");
      expect(result.stdout.trim()).toBe("REPO_MODE=solo");
    } finally {
      fs.rmSync(home, { recursive: true, force: true });
      fs.rmSync(workdir, { recursive: true, force: true });
    }
  });
});
