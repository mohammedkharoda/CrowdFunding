import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ethers} from 'ethers'
import {money} from '../src/assets'
import {CustomButton, FromField} from '../src/components'
import FormField from '../src/components/FromField'

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const { createCampaign } = useStateContext();
    const [form, setForm] = useState({
      name: '',
      title: '',
      description: '',
      target: '', 
      deadline: '',
      image: ''
    });
  
    const handleFormFieldChange = (fieldName, e) => {
      setForm({ ...form, [fieldName]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        
      console.log(form)
    }
    return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>{isLoading && <div>Loading...</div>}
    <div className="flex justify-center items-center sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] mb-4">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white" style={{padding:'16px'}}>Start a Campaign</h1>
      </div>
    <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
    <div className="flex flex-wrap" style={{gap:"40px"}}>
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <FormField labelName='Story' placeholder='Write a story' isTextArea value={form.description} handleChange={(e) => {handleFormFieldChange('description',e)}}/>

        <div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]' style={{marginTop:"10px"}}>
            <img src={money} alt='money' className='w-[40px] h-[40px] object-contain'/>
            <h4 className='font-epilouge font-bold text-[25px] text-white ml-[20px]'>You will get 80% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap" style={{gap:"40px" , marginTop:"25px"}}>
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => {handleFormFieldChange('target',e)}}
          />
          <FormField 
            labelName="End Date*"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => {handleFormFieldChange('deadline',e)}}
          />
        </div>
          
          <FormField 
            labelName="Campaign image*"
            placeholder="Place image URL for campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => {handleFormFieldChange('image',e)}}
          />

        <div className='flex justify-center items-center' style={{marginTop:"15px"}}>
            <CustomButton btnType='submit' title='Submit new Campagin' styles='bg-[#1dc071]'/>
          </div>
    </form>
    </div>
  )
}

export default CreateCampaign