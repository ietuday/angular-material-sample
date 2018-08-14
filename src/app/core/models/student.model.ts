export interface Guardians {
  city: string;
  createdOn: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  modifiedOn: Date;
  note: string;
  officePhoneNumber: string;
  phoneNumber: string;
  postalCode: string;
  primaryAddress: string;
  relationship: string;
  secondaryAddress: string;
  state: string;
  studentId: string;
}

export interface Qualifications {
  boardName: string;
  course: string;
  createdOn: Date;
  duration: string;
  id: string;
  marksObtained: string;
  modifiedOn: Date;
  studentId: string;
  totalMarks: string;
  yearOfPassing: string;
}

export class Student {
  adharCardNo: string;
  admissionDate: Date;
  birthPlace: string;
  bloodGroup: string;
  caste: string;
  category: string;
  city: string;
  createdOn: Date;
  dateOfBirth: Date;
  domicile: Date;
  emailId: string;
  fathersName: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  minority: string;
  minorityType: string;
  modifiedOn: Date;
  mothersName: string;
  nationality: string;
  phone: string;
  physicallyHandicapped: string;
  postalCode: string;
  primaryAddress: string;
  religion: string;
  secondaryAddress: string;
  state: string;
  status:string;
  studentIdentificationNumber:string;
  guardians: Array<Guardians>;
  qualifications: Array<Qualifications>;
  
}
