import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdSnackBar, MdDialog } from '@angular/material';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AppStorage } from '../../../../core/services/app-storage.service';
import { EndpointService } from '../../../../core/config/api.config';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'erp-student-documents',
  templateUrl: './student-documents.component.html',
  styleUrls: ['./student-documents.component.scss',
  ],
})
export class StudentDocumentsComponent implements OnInit {

  allDocuments: any = [];
  resourceId: string;
  uploadUrl = this.endpointService.get('UPLOAD_DOCUMENT').url;
  // studentId = '8e4c6689-30dd-4107-c949-08d50247164d';
  viewDocumentUrl;

  @Input() studentId
  // set studentId(studentId) {
  //   if (studentId) {
  //     studentId = studentId
  //     this.loadAllDocuments();
  //   }
  // }

  config: DropzoneConfigInterface = {
    url: this.uploadUrl,
    clickable: true,
    maxFiles: 25,
    autoReset: 5000,
    errorReset: 5000,
    // acceptedFiles: 'image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,',
    dictDefaultMessage: 'Drop Files here or Click to Upload',
  };

  private dialogRef: MdDialogRef<DeleteDocumentComponent>;

  constructor(
    private dialog: MdDialog,
    private api: ApiService,
    private appStorage: AppStorage,
    private endpointService: EndpointService,
    private mdSnackBar: MdSnackBar) {
    this.uploadUrl = this.endpointService.get('UPLOAD_DOCUMENT').url;
  }


  ngOnInit() {
    // this.loadAllDocuments();
  }

  /**
   * Function invoked after upload has been successful
   * @param event
   */
  onUploadSuccess(event) {
    this.resourceId = event[1].resourceId;

    if (this.resourceId) {
      this.saveDocument();
    }
  }

  /**
   * Load all uploaded documents
   */
  loadAllDocuments(): void {

    const apiParams = {
      'pathParams': {
        'STUDENT_ID': this.studentId
      }
    };

    this.api
      .request('LOAD_ALL_DOCUMENTS', apiParams)
      .subscribe(response => {
        this.allDocuments = response;
      })
  }

  /**
   * @function saveDocument
   * @description Save uploaded document
   */
  saveDocument(): void {

    const apiParams = {
      'pathParams': {
        'STUDENT_ID': this.studentId,
        'DOCUMENT_ID': this.resourceId
      }
    };

    this.api
      .request('SAVE_DOCUMENT', apiParams)
      .subscribe(response => {
        if (response['studentId']) {
          this.loadAllDocuments();
        }
      })
  }

  /**
   * Delete pop up
   * @param document
   */
  openDialog(document): void {
    this.dialogRef = this.dialog.open(DeleteDocumentComponent, {
      disableClose: true,
      height: '200px',
      width: '400px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      if (result === 'Delete!') {
        this.deleteDocument(document);
      }
    });
  }

  /**
   * View document
   */
  viewDocument(document): void {
    this.viewDocumentUrl = this.endpointService.get('VIEW_DOCUMENT').url.replace('RESOURCE_ID', document.resourceId)
  }

  /**
   * Delete document
   */
  deleteDocument(document): void {

    const apiParams = {
      'pathParams': {
        'RESOURCE_ID': document.resourceId
      }
    }

    this.api
      .request('DELETE_DOCUMENT', apiParams)
      .subscribe(response => {
        this.loadAllDocuments();
      });
  }
}


@Component({
  selector: 'erp-delete-document-dialog',
  template: `
  <h2>Delete Document</h2>
  <md-dialog-content>
     Are you sure you want to delete this Document ?
  <br><br>
  </md-dialog-content>
  <md-dialog-actions fxLayoutAlign="end">
    <button md-raised-button color="accent" (click)="dialogRef.close('Delete!')">Delete</button>
    <button md-button (click)="dialogRef.close('Cancel!')">Cancel</button>
  </md-dialog-actions>
  `
})
export class DeleteDocumentComponent {
  constructor(public dialogRef: MdDialogRef<DeleteDocumentComponent>) {
  }
}
