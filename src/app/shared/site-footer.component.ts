import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-col brand-col">
              <img src="assets/logo.png" alt="Sanad Logo" class="footer-logo" />
              <p class="brand-desc">
                Sanad est le premier reseau de solidarite intelligente en Tunisie. Nous connectons les citoyens et les associations pour transformer chaque geste en impact durable.
              </p>
              <div class="social-links">
                <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              </div>
            </div>

            <div class="footer-col">
              <h4 class="footer-title">Navigation</h4>
              <ul class="footer-links">
                <li><a routerLink="/explorer">Explorer les demandes</a></li>
                <li><a routerLink="/associations">Reseau des associations</a></li>
                <li><a routerLink="/auth/register">Devenir partenaire</a></li>
                <li><a routerLink="/free-donations">Faire un don libre</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4 class="footer-title">Ressources</h4>
              <ul class="footer-links">
                <li><a href="#">Comment ca marche ?</a></li>
                <li><a href="#">Guide des donateurs</a></li>
                <li><a href="#">Centre d'aide</a></li>
                <li><a href="#">Blog & Actualites</a></li>
              </ul>
            </div>

            <div class="footer-col newsletter-col">
              <h4 class="footer-title">Restons connectes</h4>
              <p class="newsletter-text">Recevez les dernieres mises a jour sur l'impact de notre communaute.</p>
              <div class="newsletter-form">
                <input type="email" placeholder="Votre email..." aria-label="Votre email" />
                <button class="btn-send" type="button" aria-label="Envoyer"><i class="fas fa-paper-plane"></i></button>
              </div>
              <div class="contact-mini">
                <span><i class="fas fa-envelope"></i> contact@sanad.tn</span>
                <span><i class="fas fa-phone-alt"></i> +216 71 000 000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-container">
          <div class="bottom-flex">
            <p class="copyright">&copy; 2024 Sanad Tunisie. Tous droits reserves.</p>
            <ul class="legal-links">
              <li><a href="#">Mentions Legales</a></li>
              <li><a href="#">Politique de Confidentialite</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #0f172a;
      color: #f8fafc;
      margin-top: 60px;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-top {
      padding: 5rem 0 4rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
      gap: 4rem;
    }

    .footer-logo {
      height: 48px;
      filter: brightness(0) invert(1);
      margin-bottom: 1.5rem;
    }

    .brand-desc,
    .newsletter-text,
    .contact-mini {
      color: #94a3b8;
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .brand-desc {
      margin-bottom: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s;
    }

    .social-icon:hover {
      background: #2563eb;
      transform: translateY(-3px);
    }

    .footer-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: white;
      margin: 0 0 2rem;
      position: relative;
    }

    .footer-title::after {
      content: '';
      position: absolute;
      bottom: -0.75rem;
      left: 0;
      width: 30px;
      height: 2px;
      background: #2563eb;
    }

    .footer-links,
    .legal-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 1rem;
    }

    .footer-links a,
    .legal-links a {
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.2s, padding-left 0.2s;
      font-size: 0.95rem;
    }

    .footer-links a:hover {
      color: #2563eb;
      padding-left: 5px;
    }

    .legal-links a:hover {
      color: white;
    }

    .newsletter-text {
      margin-bottom: 1.5rem;
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 0.5rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 2rem;
    }

    .newsletter-form input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      color: white;
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
    }

    .newsletter-form input:focus {
      outline: none;
    }

    .btn-send {
      background: #2563eb;
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background 0.2s;
      flex: 0 0 auto;
    }

    .btn-send:hover {
      background: #1d4ed8;
    }

    .contact-mini {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-mini span {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .contact-mini i {
      color: #2563eb;
    }

    .footer-bottom {
      padding: 2rem 0;
      background: #0a0f1d;
    }

    .bottom-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      font-size: 0.9rem;
      color: #64748b;
    }

    .copyright {
      margin: 0;
    }

    .legal-links {
      display: flex;
      gap: 2rem;
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      }
    }

    @media (max-width: 640px) {
      .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-title::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .social-links,
      .bottom-flex,
      .legal-links {
        justify-content: center;
      }

      .contact-mini span {
        justify-content: center;
      }

      .bottom-flex,
      .legal-links {
        flex-direction: column;
      }
    }
  `]
})
export class SiteFooterComponent {}
