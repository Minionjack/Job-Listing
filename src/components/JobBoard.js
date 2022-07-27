import React from 'react';

const JobBoard = ({ job : {id, company,logo,new: featured,position,role,level, postedAt, contract, location, languages, tools}
 }) => {
    const langAndTools = [];

    if(languages) {
        langAndTools.push(...languages);
    }
    if(tools) {
        langAndTools.push(...tools);
    }
  return (
    <div className='flex bg-white shadow-md m-4 p-6'>
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className='flex flex-col justify-between ml-2'>
                <h3 className='font-bold text-xl text-yellow-600'>{company}</h3>
                <h2 className='font-bold text-xl'>{position}</h2>
                <p className='text-grey-700'>
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className='flex items-center ml-auto'>
            {langAndTools ? langAndTools.map((langAndTools) => <span className='text-grey-900 bg-blue-100 font-bold m-2 p-2 rounded'>{langAndTools}</span>) :  ''}
            </div>
        
    </div>
  )
}

export default JobBoard