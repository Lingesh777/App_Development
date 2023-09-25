import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Navbar } from './Navbar';
import './Faq.css'


const Faq = () => {
  const toggleAnswer = (event) => {
    const answer = event.target.nextElementSibling;
    if(answer){
    answer.classList.toggle('active');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='faqs' style={{marginLeft:'28%'}}>
      <h1>Frequently Asked Questions.</h1>
      <div className='question'>
        <button className='collapsible' onClick={toggleAnswer}>
          1. What is Stock Management System <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
          A Stock Management System is a software solution that helps businesses track and manage their inventory. It allows you to monitor stock levels, streamline ordering, and optimize inventory control.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         2. How Does the Stock Management System Work? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Our system works by allowing you to input your product data, including descriptions, quantities, and pricing. It then tracks changes in inventory, generates reports, and provides insights into your stock levels and sales.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        3. What Are the Key Features of Your Stock Management System?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Our system offers features such as real-time inventory tracking, low stock alerts, reporting and analytics, user access controls, and the ability to manage multiple locations or warehouses.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        4. Is Your System Cloud-Based or On-Premises? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Our system is cloud-based, which means you can access it from anywhere with an internet connection. There's no need for on-site installation or maintenance.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
        5. Can I Access the System From Anywhere?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, our cloud-based system is accessible from any device with internet access. You can manage your inventory and check stock levels whether you're in the office or on the go.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         6. What Types of Reports Can I Generate? <KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        You can generate various reports, including sales reports, inventory valuation, product performance, and more. These reports provide valuable insights for making informed decisions.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         7. Is Data Backup and Security Included?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Data security is a priority. We regularly back up your data, and our system uses encryption and access controls to safeguard your information.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         8. Is There a Free Trial Period?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        Yes, we offer a free trial period so you can explore our system and its features before making a commitment.
        </div>
        </button>
        <button className='collapsible' onClick={toggleAnswer}>
         9. What Are the Pricing Plans and Payment Options?<KeyboardArrowDownIcon  style={{marginLeft:"95%",marginTop:"-10%"}}/>
        <div className='answer'>
        We offer flexible pricing plans to fit various budgets. You can choose from monthly or annual billing, and we accept major credit cards for payment.
        </div>
        </button>
      </div>
    </div>
    </>
  );
};

export default Faq;
