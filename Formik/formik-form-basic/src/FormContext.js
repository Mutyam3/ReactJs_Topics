import React from 'react'
import OtherDetails from './components/OtherDetails/OtherDetails';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import SuccessDisplay from './components/SuccessDisplay';

const FormContext = React.createContext()

export const useFormContext = () => React.useContext(FormContext);

export const FormProvider = ({ children }) => {

 const initialUserData = {

   SelectedExam : {
          selected_Exam : ''
   },
       
    PersonalDetails: {

       nationality : '',
       dateOfBirth :'',
       age : '',
       fullName:'',
       fatherName : '',
       motherName : '',
       gender : '',
       email : '',
       mobileNumber : '',
       maritalStatus : '',
       religion : '',
       choiceOfLanguage:'',
       permanentMarkOfIdentification1: '',
       permanentMarkOfIdentification2 : '',
       communityDetails: '',

       presentAddressDetails : {
         presentState : '',
         presentDistrict : '',
         presentAddress : '',
         presentVillage : '',
         presentPincode : '',
       },
       permanentAddressDetails : {
         permanentState : '',
         permanentDistrict : '',
         permanentAddress : '',
         permanentVillage : '',
         permanentPincode : '',

       },

       sameAsPresent : false,

    },

   OtherDetails :{

     ex_serviceman : '',
     personWithBenchmarkDisability : '',
     EBC_Certificate_Holder : '',
     AccountHolderName : '',
     AccountNumber : '',
     IFSC_Code : '',
     BankName : '',
     BankAddress : '',

    },

   EducationalDetails : {
            
     SSC_State : '',
     SSC_Board : '',
     SSC_DateOfPassing : '',
     SSC_RollNo: '',
     Inter_Group: '',
     Inter_State : '',
     Inter_Board : '',
     Inter_DateOfPassing : '',
     Inter_RollNo : '',
     Degree_Group : '',
     Degree_Discipline : '',
     Degree_State : '',
     Degree_Board : '',
     Degree_DateOfPassing : '',
     Degree_RollNo : '',

    },

    UploadFileDetails : {

          photo : '',
          signature : ''

    }

 }

    const [formData, setFormData] = React.useState(initialUserData);

  
    // Function to update form data
    const updateFormData = (newData) => {

      setFormData((prev) => ({ ...prev, ...newData }));
      
    };

    //Function to reset the data

    const ResetFormData = ()=>{

      setFormData(initialUserData)

    }
  
    return (
      <FormContext.Provider value={{ formData, updateFormData,ResetFormData }}>
        {children}
      </FormContext.Provider>
    );
  };
  

export default FormContext