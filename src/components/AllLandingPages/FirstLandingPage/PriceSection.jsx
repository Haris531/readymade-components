import React from 'react'
import PriceCard from '../FirstLPComponents/PriceCard';
import SectionHeading from './SectionHeading';

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
        "Monthly Performance Report",
        "Email Support"
      ]
    },
    {
      heading: "Starter",
      subHeading: "Ideal for small businesses.",
      cost: "$99.00/ Month",
      planHeading: "Plan Included",
      paragraphs: [
        "Social Media Management (3 Platforms)",
        "10 Custom Graphics/Month",
        "Advanced SEO Optimization",
        "Google Ads Management",
        "Weekly Performance Reports",
        "Priority Email & Chat Support"
      ]
    },
    {
      heading: "Starter",
      subHeading: "Ideal for small businesses.",
      cost: "$99.00/ Month",
      planHeading: "Plan Included",
      paragraphs: [
        "Social Media Management (5+ Platforms)",
        "Unlimited Custom Graphics",
        "Full SEO Optimization",
        "Google & Facebook Ads",
        "Weekly Strategy Calls",
        "24/7 Dedicated Support",
        "What Our Clients Say",
      ]
    },

  ];
  return (
    <>
      <div className=' py-10'>
        <div className='py-8 '>
          <SectionHeading text="Pricing Plans" position={"text-center"} size={"text-3xl"} />
        </div>
        <div className='flex flex-col sm:flex-row justify-center  items-stretch'>
          {
            peopleData?.map((item, index) => {
              return (
                <PriceCard index={index} cardData={item} />
              )

            })
          }
        </div>
      </div>
    </>
  )
}
