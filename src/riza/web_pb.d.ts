import * as jspb from "google-protobuf"

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
  }
}

export class CreateOrganizationReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationReq): CreateOrganizationReq.AsObject;
  static serializeBinaryToWriter(message: CreateOrganizationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationReq;
  static deserializeBinaryFromReader(message: CreateOrganizationReq, reader: jspb.BinaryReader): CreateOrganizationReq;
}

export namespace CreateOrganizationReq {
  export type AsObject = {
    name: string,
    slug: string,
  }
}

export class CreateOrganizationResp extends jspb.Message {
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;
  hasOrganization(): boolean;
  clearOrganization(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResp): CreateOrganizationResp.AsObject;
  static serializeBinaryToWriter(message: CreateOrganizationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResp;
  static deserializeBinaryFromReader(message: CreateOrganizationResp, reader: jspb.BinaryReader): CreateOrganizationResp;
}

export namespace CreateOrganizationResp {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class CreateProjectReq extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getHomepage(): string;
  setHomepage(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectReq): CreateProjectReq.AsObject;
  static serializeBinaryToWriter(message: CreateProjectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectReq;
  static deserializeBinaryFromReader(message: CreateProjectReq, reader: jspb.BinaryReader): CreateProjectReq;
}

export namespace CreateProjectReq {
  export type AsObject = {
    organizationId: string,
    name: string,
    slug: string,
    endpoint: string,
    homepage: string,
    description: string,
  }
}

export class CreateProjectResp extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): void;
  hasProject(): boolean;
  clearProject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResp): CreateProjectResp.AsObject;
  static serializeBinaryToWriter(message: CreateProjectResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResp;
  static deserializeBinaryFromReader(message: CreateProjectResp, reader: jspb.BinaryReader): CreateProjectResp;
}

export namespace CreateProjectResp {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class GetProjectsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectsReq): GetProjectsReq.AsObject;
  static serializeBinaryToWriter(message: GetProjectsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectsReq;
  static deserializeBinaryFromReader(message: GetProjectsReq, reader: jspb.BinaryReader): GetProjectsReq;
}

export namespace GetProjectsReq {
  export type AsObject = {
  }
}

export class GetProjectsResp extends jspb.Message {
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  clearProjectsList(): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectsResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectsResp): GetProjectsResp.AsObject;
  static serializeBinaryToWriter(message: GetProjectsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectsResp;
  static deserializeBinaryFromReader(message: GetProjectsResp, reader: jspb.BinaryReader): GetProjectsResp;
}

export namespace GetProjectsResp {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

export class PublishDescriptorsReq extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getProtosMap(): jspb.Map<string, Uint8Array | string>;
  clearProtosMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDescriptorsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDescriptorsReq): PublishDescriptorsReq.AsObject;
  static serializeBinaryToWriter(message: PublishDescriptorsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDescriptorsReq;
  static deserializeBinaryFromReader(message: PublishDescriptorsReq, reader: jspb.BinaryReader): PublishDescriptorsReq;
}

export namespace PublishDescriptorsReq {
  export type AsObject = {
    projectId: string,
    protosMap: Array<[string, Uint8Array | string]>,
  }
}

export class PublishDescriptorsResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishDescriptorsResp.AsObject;
  static toObject(includeInstance: boolean, msg: PublishDescriptorsResp): PublishDescriptorsResp.AsObject;
  static serializeBinaryToWriter(message: PublishDescriptorsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishDescriptorsResp;
  static deserializeBinaryFromReader(message: PublishDescriptorsResp, reader: jspb.BinaryReader): PublishDescriptorsResp;
}

export namespace PublishDescriptorsResp {
  export type AsObject = {
  }
}

