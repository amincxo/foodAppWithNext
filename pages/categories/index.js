import React from 'react'
import CategoriesPage from '../../components/templates/CategoriesPage'

function Categories({data}) {
    console.log(data)
  return (
    <CategoriesPage />
  )
}

export default Categories;

export async function getServerSideProps (context) {
    const {
        query: {difficulty , time},
    } = context;

    const res = await fetch('http://localhost:4000/data');
    const data = await res.json();

    const filtredData = data.filter(item => {
        const defficultyResult  = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty );
        const timeResult = item.details.filter(detail => {
            const cookingTime = detail['cooking Time'] || "";
            const [timeDetail] = cookingTime.split(' ');
            if (time === 'less' &&timeDetail && +timeDetail<= 30 ){
                return detail;
            } else if (time === 'more' && +timeDetail > 30 ){
                return detail;
            }
        });
        if (time && difficulty && timeResult.length && defficultyResult.length ) {
            return item
        } else if (!time && difficulty && defficultyResult.length ) {
            return item;
        } else if (time  && !difficulty && timeResult.length ) {
            return item;
        }
    });
return {
    props : { data : filtredData }
}
    
}