import { Injectable } from '@angular/core';


/**
 *
 */
export interface IApiEndpoint {
  name: string;
  method?: string;
  url: string;
  restfull?: boolean;
}

/**
 *
 */
export enum ApiEndpointType {
  GET, PUT, POST, DELETE
}

/**
 *
 */
@Injectable()
export class EndpointService {

  private readonly baseUrl = 'http://10.10.20.201:8000'; // 'http://50.116.31.221';

  private endpoints: Array<IApiEndpoint> = [];

  constructor() {
    this.init();
  }

  /**
   * his.baseUrl
   * @param name
   */
  get(name: string): IApiEndpoint {

    const requiredEndpoint = this.endpoints.find(endpoint => endpoint.name === name);

    if (requiredEndpoint && requiredEndpoint.url.indexOf(this.baseUrl) !== 0) {// check if endpoint url has the baseUrl already.
      requiredEndpoint.url = this.baseUrl + requiredEndpoint.url;
    }

    return requiredEndpoint;
  }

  private init() {

    this.endpoints = [
      { name: 'LOGIN', url: '/v1/auth/login', method: 'POST' },
      { name: 'LOGOUT', url: '/v1/auth/logout', method: 'POST' },
      { name: 'GET_ALLUSERS', url: '/v1/users', method: 'GET' },
      { name: 'GET_LOGGEDINUSER', url: '/v1/users/me', method: 'GET' },
      { name: 'GET_USER', url: '/v1/users/USERID', method: 'GET' },
      { name: 'ADD_USER', url: '/v1/users', method: 'POST' },
      { name: 'DELETE_USER', url: '/v1/users/USERID', method: 'DELETE' },
      { name: 'UPDATE_USER', url: '/v1/users/USERID', method: 'PUT' },

      /*Students*/

      { name: 'GET_ALL_STUDENTS', url: '/api/v1/students', method: 'GET' },
      { name: 'GET_STUDENT', url: '/api/v1/students/STUDENTID', method: 'GET' },
      { name: 'ARCHIVE_STUDENT', url: '/api/v1/students/STUDENTID', method: 'DELETE' },

      { name: 'CREATE_STUDENT', url: '/api/v1/students', method: 'POST' },
      { name: 'CREATE_STUDENT', url: '/api/v1/students/STUDENT_ID', method: 'POST' },
      { name: 'UPDATE_STUDENT_GUARDIAN', url: '/api/v1/students/STUDENT_ID/guardian', method: 'POST' },
      { name: 'UPDATE_STUDENT_QUALIFICATION', url: '/api/v1/students/STUDENT_ID/qualification', method: 'POST' },
      { name: 'UPDATE_STUDENT', url: '/api/v1/students', method: 'POST' },

      { name: 'UPLOAD_DOCUMENT', url: '/api/v1/resources', method: 'POST' },
      { name: 'SAVE_DOCUMENT', url: '/api/v1/students/STUDENT_ID/documents/DOCUMENT_ID', method: 'POST' },
      { name: 'LOAD_ALL_DOCUMENTS', url: '/api/v1/students/STUDENT_ID/documents', method: 'GET' },
      { name: 'VIEW_DOCUMENT', url: '/api/v1/resources/RESOURCE_ID', method: 'GET' },
      { name: 'DELETE_DOCUMENT', url: '/api/v1/resources/RESOURCE_ID', method: 'DELETE' }
    ];
  }
}
