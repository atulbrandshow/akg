import Title from '@/Components/Title';
import React from 'react'

function Default({ data }) {
    console.log(data);

    return (

        <div className='max-w-7xl h-max p-10'>
            <Title text={data?.name} size='small' level='h1' align="center"/>

        </div>
    )
}

export default Default