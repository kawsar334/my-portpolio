import React from 'react'
import "./social.scss"

const Social = () => {
  return (
    <div className='social'>
      <a href='https://www.linkedin.com/in/kawsar-firoz-a140b9237/' className="socialItem linkdin">
            <span>Linkdin</span>
              <i class="fa-brands fa-linkedin"></i>
        </a>
      <a href='https://www.facebook.com/profile.php?id=100076935281732' className="socialItem facebook">
              <span>Facebook</span>
              <i class="fa-brands fa-facebook-f"></i>
          </a>
      <a href='https://github.com/kawsar334' className="socialItem github">
              <span>Github</span>
              <i class="fa-brands fa-github"></i>
          </a>
      <a href='mailto: kawsarfiroz11@gmail.com' className="socialItem email">
              <span>Email</span>
              <i class="fa-regular fa-envelope"></i>
          </a>

      <a href="tel:+966509325731" className="socialItem phone">
              <span>Phone</span>
          <i class="fa-solid fa-phone"></i>
          </a>
    </div>
  )
}

export default Social