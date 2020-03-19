import * as core from '@actions/core';
import * as github from '@actions/github';
import * as tc from '@actions/tool-cache';

export async function run() {
  const cliPath = await tc.downloadTool('https://bin.equinox.io/a/cKDFpAZ81wg/riza-ea65f1553ae280357102c92562e4393a8439ee1f-linux-amd64.tar.gz');
  const extPath = await tc.extractTar(cliPath);
  console.log(`cli: ${cliPath}`);
  console.log(`ext: ${extPath}`);
  
  // const cachedPath = await tc.cacheFile(extPath, 'riza', 'riza', 'ea65f1553ae280357102c92562e4393a8439ee1f');
  // core.addPath(cachedPath);
  
  try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
