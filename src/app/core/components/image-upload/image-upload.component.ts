import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { MdSnackBar } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'erp-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})

export class ImageUploadComponent {
  takePhotoPermission: boolean = false;
  imageComputer: boolean = false;
  startWebcam: boolean = false;
  webcam: boolean = false;
  animal: string;
  image: any = new Image();
  data2: any;
  data3: any;
  cropperSettings2: CropperSettings;
  cropperSettings3: CropperSettings;

  @ViewChild('selectedPicture') selectedPicture: any;
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  name: string;
  cropperSettings1: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  cropperSettings: CropperSettings;
  data: any;
  imgData: any;
  private title = 'Upload Image through Webcam';

  @ViewChild('camera') video;
  @ViewChild('myCanvas') canvas: ElementRef;
  context: CanvasRenderingContext2D;
  private ctx: CanvasRenderingContext2D;

  constructor(private snackBar: MdSnackBar, public dialog: MdDialog) {
    //Cropper settings 2
    this.cropperSettings2 = new CropperSettings();
    this.cropperSettings2.width = 200;
    this.cropperSettings2.height = 200;
    this.cropperSettings2.keepAspect = false;
    this.cropperSettings2.croppedWidth = 200;
    this.cropperSettings2.croppedHeight = 200;

    this.cropperSettings2.canvasWidth = 500;
    this.cropperSettings2.canvasHeight = 300;

    this.cropperSettings2.minWidth = 100;
    this.cropperSettings2.minHeight = 100;

    this.cropperSettings2.rounded = true;
    this.cropperSettings2.minWithRelativeToResolution = false;

    this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings2.noFileInput = true;

    this.data2 = {};

    //Cropper settings 3

    this.cropperSettings3 = new CropperSettings();
    this.cropperSettings3.width = 200;
    this.cropperSettings3.height = 200;
    this.cropperSettings3.keepAspect = false;

    this.cropperSettings3.croppedWidth = 200;
    this.cropperSettings3.croppedHeight = 200;

    this.cropperSettings3.canvasWidth = 500;
    this.cropperSettings3.canvasHeight = 300;

    this.cropperSettings3.minWidth = 100;
    this.cropperSettings3.minHeight = 100;

    this.cropperSettings3.rounded = true;
    this.cropperSettings3.minWithRelativeToResolution = false;

    this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings3.noFileInput = true;

    this.imgData = {};

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ImageUploadDialog, {
      width: '600px',
      height: '630px',
      data: {
        imageComputer: this.imageComputer,
        webcam: this.webcam,
        // image: file
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'imageComputer') {
        this.imageComputer = true;
      } else {
        this.webcam = true;
      }
    });
  }

  selectImage() {
    this.openDialog();
  }

}


@Component({
  selector: 'erp-image-upload-dialog',
  templateUrl: 'image-upload-dialog.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadDialog {

  takePhotoPermission: boolean = false;
  imageComputer: boolean = false;
  startWebcam: boolean = false;
  webcam: boolean = false;
  animal: string;
  image: any = new Image();
  data2: any;
  data3: any;
  cropperSettings2: CropperSettings;
  cropperSettings3: CropperSettings;
  selectedImage;
  showCrop:boolean;

  @ViewChild('selectedPicture') selectedPicture: any;
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  name: string;
  cropperSettings1: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  cropperSettings: CropperSettings;
  // data: any;
  imgData: any;
  private title = 'Upload Image through Webcam';

  @ViewChild('camera') video;
  @ViewChild('myCanvas') canvas: ElementRef;
  context: CanvasRenderingContext2D;
  private ctx: CanvasRenderingContext2D;

  constructor(
    public dialogRef: MdDialogRef<ImageUploadDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private snackBar: MdSnackBar) {
    this.selectedImage = data.image;
    console.log(this.selectedImage);

    this.cropperSettings2 = new CropperSettings();
    this.cropperSettings2.width = 200;
    this.cropperSettings2.height = 200;
    this.cropperSettings2.keepAspect = false;

    this.cropperSettings2.croppedWidth = 200;
    this.cropperSettings2.croppedHeight = 200;

    this.cropperSettings2.canvasWidth = 500;
    this.cropperSettings2.canvasHeight = 300;

    this.cropperSettings2.minWidth = 100;
    this.cropperSettings2.minHeight = 100;

    this.cropperSettings2.rounded = true;
    this.cropperSettings2.minWithRelativeToResolution = false;

    this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings2.noFileInput = true;

    this.data2 = {};

    //Cropper settings 3

    this.cropperSettings3 = new CropperSettings();
    this.cropperSettings3.width = 200;
    this.cropperSettings3.height = 200;
    this.cropperSettings3.keepAspect = false;

    this.cropperSettings3.croppedWidth = 200;
    this.cropperSettings3.croppedHeight = 200;

    this.cropperSettings3.canvasWidth = 500;
    this.cropperSettings3.canvasHeight = 300;

    this.cropperSettings3.minWidth = 100;
    this.cropperSettings3.minHeight = 100;

    this.cropperSettings3.rounded = true;
    this.cropperSettings3.minWithRelativeToResolution = false;

    this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings3.noFileInput = true;

    this.imgData = {};
  }

  fileChangeListener($event) {
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      that.image.src = loadEvent.target.result;
      console.log(that.image.src);
      that.cropper.setImage(that.image);
    };
    myReader.readAsDataURL(file);
  }

  takePhoto = () => {
    const _video = this.video.nativeEleselectedPicturement;
    const _canvas = this.canvas.nativeElement;

    if (this.ctx != undefined) {
      this.ctx.drawImage(_video, 0, 0, _canvas.width, _canvas.height);
      this.imgData = this.ctx.getImageData(10, 10, 50, 50);
    } else {
      this.snackBar.open("Some Issue with Webcam", "Webcame Issue", {
        duration: 5000,
      });
    }

  }

  selectFile() {
    this.selectedPicture.nativeElement.click();
  }

}