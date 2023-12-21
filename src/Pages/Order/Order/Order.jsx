import React, { useState } from 'react';
import orderImg from './../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu()
  const dessert = menu?.filter(item => item.category === "dessert")
  const soup = menu.filter(item => item.category === "soup")
  const pizza = menu.filter(item => item.category === "pizza")
  const salad = menu.filter(item => item.category === "salad")
  const drink = menu?.filter(item => item.category === "drinks")

  return (
    <div>
      <Helmet>
            <title className='uppercase'>M-Y | ORDER</title>
         </Helmet>
      <Cover img={orderImg} heading={"Would you like to try a dish?"} title={"OUR SHOP"} ></Cover>
      <div className='my-8'>

        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='text-center text-lg font-bold'>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>desert</Tab>
            <Tab>drink</Tab>
          </TabList>

          <TabPanel>
            <OrderTab item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab item={drink}></OrderTab>
          </TabPanel>

        </Tabs>
      </div>

    </div>
  );
};

export default Order;