<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="/images/furia-logo.png" alt="FURIA Logo" class="logo" />
      <p>&copy; 2024 Furia. All Rights Reserved.</p>
    </div>
    <div class="footer-links">
      <div class="footer-section">
        <h3>CONTACT</h3>
        <ul>
          <li>
            <a href="https://furia.gg/about/" target="_blank">ABOUT</a>
          </li>
          <li>
            <a href="https://furia.gg/track-order/" target="_blank">
              TRACK YOUR ORDER
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>POLICY</h3>
        <ul>
          <li>
            <a href="https://furia.gg/terms-and-conditions/" target="_blank">
              TERMS AND CONDITIONS
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>FOLLOW US</h3>
        <div class="social-icons">
          <a href="https://www.instagram.com/furiagg" target="_blank">
            <MdiIcon icon="mdiInstagram" alt="Instagram" />
          </a>
          <a href="https://x.com/FURIA" target="_blank">
            <MdiIcon icon="mdiTwitter" alt="X(Twitter)" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #000;
  color: #fff;
  display: flex;
  gap: 10%;
  padding: 45px;
  flex-wrap: wrap;
  align-items: flex-start;

  &-logo,
  .footer-links,
  .footer-social {
    flex: 1;
    margin-bottom: 20px;
  }

  &-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    .logo {
      height: 50px;
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      font-size: 14px;
      font-family: 'Kufam', sans-serif;
    }
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex: 2;

    .footer-section {
      flex: 1;
      min-width: 150px;

      h3 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 5px;

          a {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;

            &:hover {
              color: #8f5d0f;
              font-weight: 600;
            }
          }
        }
      }
    }
    .social-icons {
      display: flex;
      gap: 15px;

      a {
        display: inline-block;
        color: #ffffff;

        &:hover,
        :active {
          color: #8f5d0f;
          font-weight: 600;
        }
      }
    }
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .footer-links {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }

    .footer-social {
      align-items: flex-start;
    }
  }
}
</style>
