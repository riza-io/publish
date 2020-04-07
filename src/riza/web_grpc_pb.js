// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var riza_web_pb = require('../riza/web_pb.js');

function serialize_riza_CreateOrganizationReq(arg) {
  if (!(arg instanceof riza_web_pb.CreateOrganizationReq)) {
    throw new Error('Expected argument of type riza.CreateOrganizationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_CreateOrganizationReq(buffer_arg) {
  return riza_web_pb.CreateOrganizationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_CreateOrganizationResp(arg) {
  if (!(arg instanceof riza_web_pb.CreateOrganizationResp)) {
    throw new Error('Expected argument of type riza.CreateOrganizationResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_CreateOrganizationResp(buffer_arg) {
  return riza_web_pb.CreateOrganizationResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_CreateProjectReq(arg) {
  if (!(arg instanceof riza_web_pb.CreateProjectReq)) {
    throw new Error('Expected argument of type riza.CreateProjectReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_CreateProjectReq(buffer_arg) {
  return riza_web_pb.CreateProjectReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_CreateProjectResp(arg) {
  if (!(arg instanceof riza_web_pb.CreateProjectResp)) {
    throw new Error('Expected argument of type riza.CreateProjectResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_CreateProjectResp(buffer_arg) {
  return riza_web_pb.CreateProjectResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_GetProjectsReq(arg) {
  if (!(arg instanceof riza_web_pb.GetProjectsReq)) {
    throw new Error('Expected argument of type riza.GetProjectsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_GetProjectsReq(buffer_arg) {
  return riza_web_pb.GetProjectsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_GetProjectsResp(arg) {
  if (!(arg instanceof riza_web_pb.GetProjectsResp)) {
    throw new Error('Expected argument of type riza.GetProjectsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_GetProjectsResp(buffer_arg) {
  return riza_web_pb.GetProjectsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_PublishDescriptorsReq(arg) {
  if (!(arg instanceof riza_web_pb.PublishDescriptorsReq)) {
    throw new Error('Expected argument of type riza.PublishDescriptorsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_PublishDescriptorsReq(buffer_arg) {
  return riza_web_pb.PublishDescriptorsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_riza_PublishDescriptorsResp(arg) {
  if (!(arg instanceof riza_web_pb.PublishDescriptorsResp)) {
    throw new Error('Expected argument of type riza.PublishDescriptorsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_riza_PublishDescriptorsResp(buffer_arg) {
  return riza_web_pb.PublishDescriptorsResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var APIService = exports.APIService = {
  createOrganization: {
    path: '/riza.API/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: riza_web_pb.CreateOrganizationReq,
    responseType: riza_web_pb.CreateOrganizationResp,
    requestSerialize: serialize_riza_CreateOrganizationReq,
    requestDeserialize: deserialize_riza_CreateOrganizationReq,
    responseSerialize: serialize_riza_CreateOrganizationResp,
    responseDeserialize: deserialize_riza_CreateOrganizationResp,
  },
  createProject: {
    path: '/riza.API/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: riza_web_pb.CreateProjectReq,
    responseType: riza_web_pb.CreateProjectResp,
    requestSerialize: serialize_riza_CreateProjectReq,
    requestDeserialize: deserialize_riza_CreateProjectReq,
    responseSerialize: serialize_riza_CreateProjectResp,
    responseDeserialize: deserialize_riza_CreateProjectResp,
  },
  getProjects: {
    path: '/riza.API/GetProjects',
    requestStream: false,
    responseStream: false,
    requestType: riza_web_pb.GetProjectsReq,
    responseType: riza_web_pb.GetProjectsResp,
    requestSerialize: serialize_riza_GetProjectsReq,
    requestDeserialize: deserialize_riza_GetProjectsReq,
    responseSerialize: serialize_riza_GetProjectsResp,
    responseDeserialize: deserialize_riza_GetProjectsResp,
  },
  publishDescriptors: {
    path: '/riza.API/PublishDescriptors',
    requestStream: false,
    responseStream: false,
    requestType: riza_web_pb.PublishDescriptorsReq,
    responseType: riza_web_pb.PublishDescriptorsResp,
    requestSerialize: serialize_riza_PublishDescriptorsReq,
    requestDeserialize: deserialize_riza_PublishDescriptorsReq,
    responseSerialize: serialize_riza_PublishDescriptorsResp,
    responseDeserialize: deserialize_riza_PublishDescriptorsResp,
  },
};

exports.APIClient = grpc.makeGenericClientConstructor(APIService);
