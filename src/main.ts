import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as tc from '@actions/tool-cache';

async function run() {
  const cliPath = await tc.downloadTool('https://bin.equinox.io/a/cKDFpAZ81wg/riza-f5162f7233bd59bfac4b598aca2f82776639a90e-linux-amd64.tar.gz');
  const extPath = await tc.extractTar(cliPath);
  
  const cachedPath = await tc.cacheDir(extPath, 'riza', 'f5162f7233bd59bfac4b598aca2f82776639a90e');
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
