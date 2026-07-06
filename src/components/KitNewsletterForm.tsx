import React, { useEffect } from 'react';

export default function KitNewsletterForm() {
  useEffect(() => {
    const scriptUrl = 'https://f.convertkit.com/ckjs/ck.5.js';
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const kitStyles = `
    .formkit-form[data-uid="9295d465e0"] * { box-sizing: border-box; }
    .formkit-form[data-uid="9295d465e0"] .formkit-alert {
      background: rgba(29, 158, 117, 0.4);
      border: 1px solid rgba(245, 201, 106, 0.6);
      border-radius: 12px;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.875rem;
      list-style: none;
      margin: 15px auto;
      padding: 14px 18px;
      text-align: center;
      width: 100%;
    }
    .formkit-form[data-uid="9295d465e0"] .formkit-alert:empty { display: none; }
    .formkit-form[data-uid="9295d465e0"] .formkit-alert-error {
      background: rgba(239, 68, 68, 0.2);
      border-color: rgba(239, 68, 68, 0.5);
      color: #fecaca;
    }
    .formkit-form[data-uid="9295d465e0"] .formkit-spinner {
      display: flex;
      height: 0px;
      width: 0px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      text-align: center;
      transition: all 300ms ease-in-out;
      align-items: center;
      justify-content: center;
    }
    .formkit-form[data-uid="9295d465e0"] .formkit-spinner > div {
      margin: auto 2px;
      width: 8px;
      height: 8px;
      background-color: #fff;
      opacity: 0.8;
      border-radius: 100%;
      display: inline-block;
      animation: formkit-bouncedelay-9295d465e0 1.4s infinite ease-in-out both;
    }
    .formkit-form[data-uid="9295d465e0"] .formkit-spinner > div:nth-child(1) { animation-delay: -0.32s; }
    .formkit-form[data-uid="9295d465e0"] .formkit-spinner > div:nth-child(2) { animation-delay: -0.16s; }
    .formkit-form[data-uid="9295d465e0"] .formkit-submit[data-active] .formkit-spinner { opacity: 1; height: 100%; width: 50px; }
    .formkit-form[data-uid="9295d465e0"] .formkit-submit[data-active] span { opacity: 0; }
    @keyframes formkit-bouncedelay-9295d465e0 {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `;

  return (
    <div className="w-full max-w-md mx-auto">
      <style dangerouslySetInnerHTML={{ __html: kitStyles }} />
      <form
        action="https://app.kit.com/forms/9652280/subscriptions"
        className="seva-form formkit-form w-full"
        method="post"
        data-sv-form="9652280"
        data-uid="9295d465e0"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        {...{ "min-width": "400 500 600 700 800" }}
      >
        <div data-style="clean">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields flex flex-col sm:flex-row gap-3 w-full"
          >
            <div className="formkit-field flex-grow">
              <input
                className="formkit-input w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F5C96A] placeholder-gray-300 text-white"
                name="email_address"
                aria-label="Email Address"
                placeholder="Enter your email address..."
                required
                type="email"
              />
            </div>
            <button
              data-element="submit"
              type="submit"
              id="newsletter-submit-btn"
              className="formkit-submit formkit-submit relative bg-[#1D9E75] hover:bg-[#15805e] text-white rounded-xl px-7 py-3.5 font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-md whitespace-nowrap"
            >
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <div className="formkit-powered-by-convertkit-container flex justify-center mt-3">
            <a
              href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
              data-element="powered-by"
              className="formkit-powered-by-convertkit text-[11px] text-gray-300 hover:text-white transition-colors opacity-75 underline"
              target="_blank"
              rel="nofollow noopener"
            >
              Built with Kit
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
