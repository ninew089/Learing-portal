
export interface accountFormProps  {
    id: string
    password: string
    comfirmpassword: string
    title: string
    name: string
    lastname: string
    birthyear: string
    gender: string
    educationid: string
    email: string
    usertypeid: string
    jobtypeId: number
    jobLevel: string
    jobTitle: string
    jobLevelid: number
    jobStartDate: string
    MinistryId: number
    DepartmentId: number
    Division: string
    OccupationId: number
    workPlace: string
    stateEnterprisid: number
};
export interface typeUserProps{
    formProps: accountFormProps | any
}
export interface typeProps{
    formProps: accountFormProps | any
    name:string

}

export interface userTypeProps{
    id: number
    name: string
}
export interface stateEnterpriseProps{
    id: number
    name:string
}
export interface OccupationsProps{
    id: number
    name:string
}
export interface jobTypes3Props{
    id: number
    name: string
}
export interface jobTypes2Props{
    id: number
    name: string
}
export interface jobTypes1Props{
    id: number
    name: string
}
export interface jobLevelProps{
    id: number
    name:string
}