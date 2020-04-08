import * as core from '@actions/core';
import { readFileSync } from 'fs';
import grpc = require('grpc');

import services = require('./riza/web_grpc_pb');
import messages = require('./riza/web_pb');

const apiClient = new services.APIClient('grpc.riza.io', grpc.credentials.createSsl());

async function run() {
  try {
    const project = core.getInput('project');
    const path = core.getInput('path');
    const protoBytes = readFileSync(path);

    const req = new messages.PublishDescriptorsReq();
    req.setProjectId(project);
    const protosMap = req.getProtosMap();
    protosMap.set(path, protoBytes);

    await function(): Promise<messages.PublishDescriptorsResp> {
      return new Promise<messages.PublishDescriptorsResp>((resolve, reject) => {
        apiClient.publishDescriptors(req, null, (err: grpc.callError, resp: messages.PublishDescriptorsResp) => {
          err ? reject(err) : resolve(resp);
        });
      });
    }();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
