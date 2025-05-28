import React from 'react'
import PriceCard from '../FirstLPComponents/PriceCard';

export default function PriceSection() {
  const peopleData = [
    {
      heading: "Starter",
      subHeading: "Ideal for small businesses.",
      cost: "$99.00/ Month",
      planHeading: "Plan Included",
      paragraphs: [
        "Social Media Management (1 Platform)",
        "5 Custom Graphics/Month",
        "Basic SEO Optimization",
        "Monthly Performance Report"
      ]
    },
    {
      heading: "Starter",
      subHeading: "Ideal for small businesses.",
      cost: "$99.00/ Month",
      planHeading: "Plan Included",
       paragraphs: [
        "Social Media Management (1 Platform)",
        "5 Custom Graphics/Month",
        "Basic SEO Optimization",
        "Monthly Performance Report"
      ]
    },
    {
      heading: "Starter",
      subHeading: "Ideal for small businesses.",
      cost: "$99.00/ Month",
      planHeading: "Plan Included",
      paragraphs: [
        "Social Media Management (1 Platform)",
        "10GB of storage",
        "Email support",
        "Help center access"
      ]
    },

  ];
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-center items-center '>
        {
          peopleData.map((item) => {
            return (
              <PriceCard cardData={item} />
            )

          })
        }

      </div>
    </>
  )
}
