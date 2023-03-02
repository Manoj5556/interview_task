import { useState } from "react";

export default function Data() {
  const products = [
    {
      name: "iphone",
      categories: [
        {
          name: "iphone 11 white",
          description: ["products: APPLE iPhone 11 (White, 64 GB)",
          "Sellingprice: 37,999",
          "Orginalprice: 43,990",
          "Storage: 64 GB ROM",
          "Display: 15.49 cm (6.1 inch) Liquid Retina HD Display",
          "Camera: 12MP + 12MP | 12MP Front Camera",
          "Proccessor: A13 Bionic Chip Processor",
          "Warranty: Brand Warranty of 1 Year"],
        },
        {
          name: "iphone 11 black",
          description: ["products: APPLE iPhone 11 (Black, 64 GB)",
          "Sellingprice: 37,999",
          "Orginalprice: 43,900",
          "Storage: 64 GB ROM",
          "Display: 15.49 cm (6.1 inch) Liquid Retina HD Display",
          "Camera: 12MP + 12MP | 12MP Front Camera",
          "Proccessor: A13 Bionic Chip Processor",
          "Warranty: Brand Warranty of 1 Year",]
        },
      ],
    },
    {
      name: "Samsung",
      categories: [
        {
          name: "SAMSUNG Galaxy F22 Denim Blue",
          description: ["products: SAMSUNG Galaxy F22 (Denim Blue, 64 GB)",
          "Sellingprice: 10,499",
          "Orginalprice: 14,999",
          "Descripition: 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "Display: 16.26 cm (6.4 inch) HD+ Display",
          "Camera: 48MP + 8MP + 2MP + 2MP | 13MP Front Camera",
          "Battery: 6000 mAh Lithium-ion Battery",
          "Proccessor: MediaTek Helio G80 Processor",],
        },
        {
          name: "SAMSUNG Galaxy S22",
          description: ["products: SAMSUNG Galaxy S22 ( Black, 64 GB)",
          "Sellingprice: 10,000",
          "Orginalprice: 10,000",
          "Descripition: 4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "Display: 16.26 cm (6.4 inch) HD+ Display",
          "Camera: 200MP + 8MP + 2MP + 2MP | 13MP Front Camera",
          "Battery: 6000 mAh Lithium-ion Battery",
          "Proccessor: MediaTek Helio G80 Processor"],
        },
       
      ],
    },
  ];

  const [category, setCategory] = useState();
  const [state, setState] = useState();
  const [product_details, setproduct_details] = useState();
  const [categories, setcategories] = useState([]);
  const [description, setdescription] = useState([]);

  const changecategory = (event) => {
    setCategory(event.target.value);
    setcategories(products.find((ctr) => ctr.name === event.target.value).categories);
  };
  const ChangeState = (event) => {
    setState(event.target.value);
    setdescription(categories.find((state) => state.name === event.target.value).description);
  };
  const changeproduct_details = (event) => {
    setproduct_details(event.target.value);
    setdescription(categories.find((state) => state.name === event.target.value).description);
  };

  return (
    <div className="Justify-content-center d-flex w-50 vh-50 ">
      <div className="w-50 mt-5">
        <div>Link productss</div>
        <select
          className="form-control"
          value={category}
          onChange={changecategory}
        >
          <option>Select Category</option>
          {products.map((ctr) => (
            <option value={ctr.name}>{ctr.name}</option>
          ))}
        </select>
        <br />
        <select className="form-control" value={state} onChange={ChangeState}>
          <option>Select products</option>
          {categories.map((state) => (
            <option value={state.name}>{state.name}</option>
          ))}
        </select>
        <br />
        <div  value={product_details} onChange={changeproduct_details}>
          {description.map((product_details) => (
            <div value={product_details}>{product_details}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
