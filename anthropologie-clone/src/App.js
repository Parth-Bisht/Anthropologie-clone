import "./App.css";
import { Slider } from "./Slider";

const data = [
  {
    id: 1,
    img1: "https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/66667379_042_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "FREECITY Super-Vintage Sweat Pants",
    price: "$235.00",
  },
  {
    id: 2,
    img1: "https://images.urbndata.com/is/image/Anthropologie/66667015_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/66667015_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "FREECITY Super-VIntage Long-Sleeve",
    price: "$215.00",
  },
  {
    id: 3,
    img1: "https://images.urbndata.com/is/image/Anthropologie/66667379_080_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/66667379_080_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "FREECITY Super-Vintage Sweat Pants",
    price: "$235.00",
  },
  {
    id: 4,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112929840003_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112929840003_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Favorite Daughter Favorite Aunt Tee",
    price: "$48.00",
  },
  {
    id: 5,
    img1: "https://images.urbndata.com/is/image/Anthropologie/64892649_066_b16?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/64892649_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "FREECITY Sweatpants",
    price: "$158.00",
  },
  {
    id: 6,
    img1: "https://images.urbndata.com/is/image/Anthropologie/A4112929840003_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/A4112929840003_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Favorite Daughter Favorite Sister Tee",
    price: "$95.00",
  },
  {
    id: 7,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4111260840019_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4111260840019_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Clare V. La Banane Tie-Dye Sweatshirt",
    price: "$105.00",
  },
  {
    id: 8,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112260840030_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112260840030_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Clare V. La Banane Petite Graphic Tee",
    price: "$200.00",
  },
  {
    id: 9,
    img1: "https://images.urbndata.com/is/image/Anthropologie/68742410_272_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/68742410_272_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Sundry Rugby T-Shirt Dress",
    price: "$170.00",
  },
  {
    id: 10,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112261180007_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112261180007_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "MOTHER Lil Goodie Graphic Tee",
    price: "$130.00",
  },
  {
    id: 11,
    img1: "https://images.urbndata.com/is/image/Anthropologie/66125931_041_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/66125931_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "MOTHER Relaxed Funnel-Neck Sweatshirt",
    price: "$210.00",
  },
  {
    id: 12,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_068_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_068_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "The Somerset Maxi Dress",
    price: "$100.00",
  },
  {
    id: 13,
    img1: "https://images.urbndata.com/is/image/Anthropologie/64215254_046_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/64215254_046_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Seamless Square-Neck Bralette",
    price: "$250.00",
  },
  {
    id: 14,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112211810112_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112211810112_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Jenny Seamless T-Back Bralette",
    price: "$165.00",
  },
  {
    id: 15,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4110347800056_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4110347800056_066_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Bl-nk Miranda Peasant Blouse",
    price: "$220.00",
  },
  {
    id: 16,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112609690111_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112609690111_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "T.La Classic V-Neck Tee",
    price: "$230.00",
  },
  {
    id: 17,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112609690192_055_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "T.La Flutter-Sleeved Tee",
    price: "$205.00",
  },
  {
    id: 18,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112346500011_049_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112346500011_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Danni Seamless Hipster Briefs",
    price: "$135.00",
  },
  {
    id: 19,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Petra Embroidered Tunic Dress",
    price: "$240.00",
  },
  {
    id: 20,
    img1: "https://images.urbndata.com/is/image/Anthropologie/64201411_016_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/64201411_016_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Sasha Seamless V-Neck Bralette",
    price: "$255.00",
  },
  {
    id: 21,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4110089540078_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4110089540078_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Seamless Bandeau Bralette",
    price: "$145.00",
  },
  {
    id: 22,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4130578570013_030_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Conditions Apply Katalia Printed Smocked Peplum Tank",
    price: "175.00",
  },
  {
    id: 23,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112916210037_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112916210037_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Pilcro Sustainable Scoop Neck Tee",
    price: "$215.00",
  },
  {
    id: 24,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112345460081_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112345460081_001_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Pilcro Sustainable Ribbed Tank",
    price: "$235.00",
  },
  {
    id: 25,
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112529100016_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112529100016_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Pilcro Spliced-Neck Tee",
    price: "$90.00",
  },
  {
    id: 26,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112522160097_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112522160097_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Ribbed Racer Tank",
    price: "$205.00",
  },
  {
    id: 27,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112522160100_069_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112522160100_069_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Maeve Ruffled Rib Halter Tank",
    price: "$155.00",
  },
  {
    id: 28,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4130916210078_049_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4130916210078_049_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Emily Halter Mini Dress",
    price: "$145.00",
  },
  {
    id: 29,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112522160066_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112522160066_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Maeve Mock Neck Top",
    price: "$195.00",
  },
  {
    id: 30,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112916210039_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112916210039_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "Pilcro Sustainable Double-V Tee",
    price: "$215.00",
  },
  {
    id: 31,
    img1: "https://images.urbndata.com/is/image/Anthropologie/68099332_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    img2: "https://images.urbndata.com/is/image/Anthropologie/68099332_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    title: "Maeve Mock Neck Top",
    price: "$195.00",
  },
  {
    id: 32,
    img1: "https://images.urbndata.com/is/image/Anthropologie/4112920000004_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    img2: "https://images.urbndata.com/is/image/Anthropologie/4112920000004_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    title: "Pilcro Sustainable Double-V Tee",
    price: "$215.00",
  },
];

function App() {
  return (
    <div className="App">
      <Slider data={data} />
    </div>
  );
}

export default App;
