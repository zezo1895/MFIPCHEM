import React from 'react';
import "./about.css"
import Lottie from "lottie-react";
import down from "../../anm/Animation - 1735094509873.json";
import quality from "../../anm/quality.json";
import safe from "../../anm/safe.json";
import effect from "../../anm/Animation - 1735157747198.json";
import call from "../../anm/call.json";

const About = () => {
  return (
    <>
    <div className="head-contact d-flex mt-3 pt-2" style={{ justifyContent:"center",alignItems:"center"}} >
      <h1 className='d-flex' style={{ textAlign:"center", margin:'0 auto',justifyContent:"center",alignItems:"center",letterSpacing:"0px" }}> <Lottie 
         
         style={{height:60}}
         animationData={down}
       /> عن الشركه   </h1>
      
    </div>
    <div className='container-all mt-3 'style={{ padding:'0px 15px' }}>
      <div className="row" style={{ textAlign:"right" }}>
      <h1> :MFIPCHEM شركه</h1>
      <p dir='auto' style={{ padding:"0px 10px",fontSize:"1.2rem",fontWeight:"400",letterSpacing:"0",marginBottom:"30px" }}>نحن  شركه MFIPCHEM  شركه منتجه و موزعه لمنتجات التنظيف عاليه الجوده للمؤسسات الطبيه و الصحيه منظفات صناعيه  لمعالجه الاغذيه</p>
      <h1 > :مميزات الشركه</h1>
      </div>
      <div dir='auto' style={{ alignItems:"center",flexWrap:"wrap",justifyContent:"center" }} className="quality d-flex">
        <div  className="text-quality">
          <h2>1-جودة عالية ومعايير عالمية</h2>
          <p dir='auto'>نلتزم بتقديم منتجات تنظيف تعتمد على معايير الجودة العالمية لضمان أداء استثنائي. يتم تصنيع منتجاتنا باستخدام أفضل المواد الخام لتلبية احتياجات العملاء في جميع الظروف.</p>
        </div>
        <Lottie 
         loop={0}
         style={{height:300}}
         animationData={quality}
         className='anm'
       />
      </div>
      <div dir='auto' style={{ alignItems:"center",flexWrap:"wrap",justifyContent:"center" }} className="quality d-flex">
        <div  className="text-quality">
          <h2>2-   منتجات صديقة للبيئة وآمنة</h2>
          <p dir='auto'>نحرص على توفير منتجات تنظيف آمنة على الصحة وصديقة للبيئة، مما يساهم في الحفاظ على البيئة وتقليل التأثيرات السلبية الناتجة عن استخدام المواد الكيميائية الضارة.</p>
        </div>
        <Lottie 
         
         style={{height:300}}
         animationData={safe}
         className='anm'
       />
      </div>
      <div dir='auto' style={{ alignItems:"center",flexWrap:"wrap",justifyContent:"center" }} className="quality d-flex">
        <div  className="text-quality">
          <h2>3-      فعالية مثبتة في التنظيف والتعقيم</h2>
          <p dir='auto'>تقدم منتجاتنا نتائج ممتازة في إزالة البقع وتعقيم الأسطح بكفاءة، مما يجعلها الخيار الأمثل للمستشفيات والأماكن التي تتطلب مستوى عاليًا من النظافة والحماية.</p>
        </div>
        <Lottie 
         
         style={{height:300}}
         animationData={effect}
 className='anm'
       />
      </div>
      <div dir='auto' style={{ alignItems:"center",flexWrap:"wrap",justifyContent:"center" }} className="quality d-flex">
        <div  className="text-quality">
          <h2>4-      دعم فني وخدمات مخصصة    </h2>
          <p dir='auto'>نقدم لعملائنا دعمًا فنيًا متواصلًا وخدمات مخصصة تلبي احتياجاتهم، مع إمكانية توفير حلول تنظيف تناسب متطلبات كل منشأة على حدة لضمان رضا العملاء.ة.</p>
        </div>
        <Lottie 
         loop={0}
         style={{height:300}}
         animationData={call}
         className='anm'
       />
      </div>

</div>
    </>
  )
}

export default About;
