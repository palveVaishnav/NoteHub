// import React from 'react';
import Select from 'react-select';

export function Filterbar() {
    const degrees = [
        { value: 'BSc', label: 'Bachelor of Science (BSc)' },
        { value: 'BA', label: 'Bachelor of Arts (BA)' },
        { value: 'B.Tech', label: 'Bachelor of Technology (B.Tech)' },
        { value: 'BCom', label: 'Bachelor of Commerce (BCom)' },
        { value: 'BE', label: 'Bachelor of Engineering (BE)' },
        { value: 'MBBS', label: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)' },
        { value: 'BBA', label: 'Bachelor of Business Administration (BBA)' },
        { value: 'BCA', label: 'Bachelor of Computer Applications (BCA)' },
        { value: 'LLB', label: 'Bachelor of Laws (LLB)' },
        { value: 'B.Ed', label: 'Bachelor of Education (B.Ed)' },
        { value: 'B.Pharm', label: 'Bachelor of Pharmacy (B.Pharm)' },
        { value: 'B.Arch', label: 'Bachelor of Architecture (B.Arch)' },
        { value: 'BDS', label: 'Bachelor of Dental Surgery (BDS)' },
        { value: 'BAMS', label: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)' },
        { value: 'BHMS', label: 'Bachelor of Homeopathic Medicine and Surgery (BHMS)' },
        { value: 'BPT', label: 'Bachelor of Physiotherapy (BPT)' },
        { value: 'B.VSc', label: 'Bachelor of Veterinary Science (B.VSc)' },
        { value: 'BHM', label: 'Bachelor of Hotel Management (BHM)' },
        { value: 'BFA', label: 'Bachelor of Fine Arts (BFA)' },
        { value: 'BPA', label: 'Bachelor of Performing Arts (BPA)' },
        { value: 'BBA LLB', label: 'Bachelor of Business Administration and Bachelor of Laws (BBA LLB)' }
    ];

    const branches = [
        { value: 'CSE', label: 'Computer Science and Engineering (CSE)' },
        { value: 'EE', label: 'Electrical Engineering (EE)' },
        { value: 'ME', label: 'Mechanical Engineering (ME)' },
        { value: 'CE', label: 'Civil Engineering (CE)' },
        { value: 'IT', label: 'Information Technology (IT)' },
    ];

    const years = [
        { value: '1', label: '1st Year' },
        { value: '2', label: '2nd Year' },
        { value: '3', label: '3rd Year' },
        { value: '4', label: '4th Year' },
        { value: '5', label: '5th Year' },
    ];

    const subjects = [
        { value: 'Maths', label: 'Mathematics' },
        { value: 'Physics', label: 'Physics' },
        { value: 'Chem', label: 'Chemistry' },
        { value: 'Bio', label: 'Biology' },
        { value: 'Comp', label: 'Computer Science' },
    ];

    return (
        <div className='flex justify-left' >
            <Select options={degrees} placeholder={'Choose Degree'} className='flex-1 p-2' />

            <Select options={branches} placeholder={'Choose Branch'} className='flex-1 p-2' />

            <Select options={years} placeholder={'Choose Year'} className='flex-1 p-2' />

            <Select options={subjects} placeholder={'Choose Subject'} className='flex-1 p-2' />
        </div>
    );
}
