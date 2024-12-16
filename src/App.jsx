import React from 'react'
import Dashboard from './Dashboard'
import AdminLogin from './AdminLogin'
import Card from './Card'

function App() {


  return (
<>
   
       <Card
  photo="https://via.placeholder.com/150"
  prof="Software Developer"
  username="John Doe"
  city="Ahmedabad"
  age={28}
  mapLocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7608006855344!2d72.53464677477061!3d23.032553315956626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85000646f615%3A0xa375e8fc6805531b!2sIIM%20Ahmedabad%20old%20campus%20main%20gate!5e0!3m2!1sen!2sin!4v1734012335668!5m2!1sen!2sin"
/>
<Card
  photo="https://via.placeholder.com/150"
  prof="Frontend Developer"
  username="Mugdha"
  city="Pune"
  age={23}
  mapLocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.137104174828!2d73.80464133399451!3d18.44887904870946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953f2263c307%3A0x79aeb881437adebd!2sNarhe%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1734067642937!5m2!1sen!2sin"
  />

<Card
  photo="https://via.placeholder.com/150"
  prof="Backend Developer"
  username="Shubham Doe"
  city="Mumbai"
  age={25}
  mapLocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.94815293697!2d72.5693197590614!3d19.082313107630817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1734067728658!5m2!1sen!2sin" 

    />

<AdminLogin/>
  </>
  )
}

export default App
