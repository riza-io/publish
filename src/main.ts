import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as tc from '@actions/tool-cache';

async function run() {
  const cliPath = await tc.downloadTool('https://bin.equinox.io/a/cKDFpAZ81wg/riza-ea65f1553ae280357102c92562e4393a8439ee1f-linux-amd64.tar.gz');
  const extPath = await tc.extractTar(cliPath);
  
  const cachedPath = await tc.cacheDir(extPath, 'riza', 'ea65f1553ae280357102c92562e4393a8439ee1f');
  core.addPath(cachedPath);
  
  try {
    const project = core.getInput('project');
    const version = core.getInput('version');
    const path = core.getInput('path');
    await exec.exec('riza', [project, version, path]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
