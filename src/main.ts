import * as core from '@actions/core';
import * as riza from '@riza-io/riza';
import * as grpc from 'grpc';
import { readFileSync } from 'fs';


const apiClient = new riza.APIClient('grpc.riza.io', grpc.credentials.createSsl());

async function run() {
  try {
    const project = core.getInput('project');
    const path = core.getInput('path');
    const protoBytes = readFileSync(path);

    const req = new riza.PublishDescriptorsReq();
    req.setProjectId(project);
    const protosMap = req.getProtosMap();
    protosMap.set(path, protoBytes);

    await function(): Promise<riza.PublishDescriptorsResp> {
      return new Promise<riza.PublishDescriptorsResp>((resolve, reject) => {
        apiClient.publishDescriptors(req, (error: grpc.ServiceError | null, response: riza.PublishDescriptorsResp) => {
          error ? reject(error) : resolve(response);
        });
      });
    }();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
