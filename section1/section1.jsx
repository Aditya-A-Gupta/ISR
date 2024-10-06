import React from "react";
import "./section1.css";  // Create this CSS file to style your component
import SDG1 from './assets/images/sdg1.webp'
import SDG2 from './assets/images/sdg2.webp'
import SDG5 from './assets/images/sdg5.webp'
import SDG10 from './assets/images/sdg10.webp'
import GuidanceImage from './assets/images/section2-school.webp'

const Section1_Content = () => {
    return (
<div className="grid-container">
      
      {/* Top Left: SDG Icons */}
      <div className="sdg-icons-grid">
        <img src={SDG1} alt="SDG 1" className="sdg1"/>
        <img src={SDG2} alt="SDG 2" className="sdg2"/>
        <img src={SDG5} alt="SDG 5" className="sdg5"/>
        <img src={SDG10} alt="SDG 10" className="sdg10"/>
      </div>

      {/* Top Right: Social Equality Section */}
      <div className="social-equality">
        <h2>1: Social Equality and Empowerment</h2>
        <p>
        IIT Bombay is committed to promoting inclusivity and providing equal opportunities for everyone, regardless of gender, race, or financial background. There are admission reservations for females, people with disability, and students from economically disadvantaged or historically marginalised communities. Additionally, the institute offers numerous scholarships and fee remittances on a merit-cum-means basis, ensuring that every student has the chance to succeed without having to worry about monetary constraints. In the last year alone, over INR 30 crore was awarded in scholarships, along with laptops and other necessary technological devices. Furthermore, tuition, housing, and food are kept extremely affordable, significantly cheaper than market rates.         </p>
      </div>

      {/* Bottom Left: Research and Development Section */}
      <div className="research-section">
        <p>
        Abhyuday, a student body promoting social welfare, has organised several career guidance sessions and learning programs for underprivileged school children. It has also conducted ten food distribution campaigns in the last year, providing 2000 meals to those in need. The Centre for Technology Alternatives for Rural Areas (CTARA) has been developing socially inclusive and environmentally sustainable technologies to improve the quality of life of marginalised rural communities. They accomplish this through participatory and collaborative processes that involve local knowledge, values, and aspirations. 

The institute has a Gender Cell and an SC/ST Cell, which mandate zero gender-based and caste-based discrimination, respectively. These bodies champion diversity and inclusion through their initiatives and act as forums for progressive debates. Saathi, the LGBTQ+ resource group, is constantly working towards creating a supportive and inclusive environment for students and staff of diverse sexual orientations and gender identities. The institute has also introduced ‘GC101’, a gender sensitisation course compulsory for all students.
        </p>
        <h2>Research and Development</h2>
        <p>
        IIT Bombay researchers have been contributing to Social Equality and Empowerment in numerous ways. Their work has focused on financial inclusion, socio-economic vulnerability to climate change, women empowerment, and upliftment of farmers, among other fields. Noteworthy agricultural projects include the fabrication of anti-hail guns to protect crops from hailstorms, and the development of plant-level stress maps to help farmers make informed choices and save water by distinguishing between crop water and nitrogen stress. Researchers have also developed a high quality speech-to-speech machine translation (SSMT) system from English and Hindi to many Indian languages, helping break down linguistic barriers.
        </p>
      </div>

      {/* Bottom Right: Image Section */}
      <div className="image-section-right">
        <img src={GuidanceImage} alt="Guidance in IIT Bombay" />
      </div>
    </div>
    );
  };
  
export default Section1_Content;


