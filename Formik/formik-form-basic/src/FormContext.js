import React from 'react'
import OtherDetails from './components/OtherDetails/OtherDetails';


const FormContext = React.createContext()

export const useFormContext = () => React.useContext(FormContext);

export const FormProvider = ({ children }) => {
    
    const [formData, setFormData] = React.useState(


      {
       

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
            presentState : '',
            presentDistrict : '',
            presentAddress : '',
            presentVillage : '',
            presentPincode : '',
            permanentState : '',
            permanentDistrict : '',
            permanentAddress : '',
            permanentVillage : '',
            permanentPincode : '',
            sameAsPresent : false,

    
       
            ex_serviceman : '',
            personWithBenchmarkDisability : '',
            EBC_Certificate_Holder : '',
            AccountHolderName : '',
            AccountNumber : '',
            IFSC_Code : '',
            BankName : '',
            BankAddress : '',
       
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
       
             photo : '',
             signature : ''
        
      
      }
    
      
    );
  
    // Function to update form data
    const updateFormData = (newData) => {
      setFormData((prev) => ({ ...prev, ...newData }));
      
    };
  
    return (
      <FormContext.Provider value={{ formData, updateFormData }}>
        {children}
      </FormContext.Provider>
    );
  };
  

export default FormContext