function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-3 pb-2 border-b border-gray-700">
        {title}
      </h2>
      <div className="space-y-3 text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

function Highlight({ children }) {
  return (
    <span className="text-green-400 font-medium">{children}</span>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last Updated: August 16, 2026</p>
      </div>

      {/* Intro */}
      <p className="text-gray-400 leading-relaxed mb-10">
        At <Highlight>Fit Track</Highlight>, your privacy is important to us. This policy explains
        how we handle your data, what we collect, and the limitations of our service. Please read
        it carefully before using the app.
      </p>

      <Section title="1. Local-Only Data Storage">
        <p>
          Fit Track stores <Highlight>all your fitness data locally on your device</Highlight> —
          workout logs, body measurements, goals, and personal settings. We do{" "}
          <strong className="text-white">not</strong> upload or sync this data to any external
          server.
        </p>
        <p>
          Because your data lives only on your device, Fit Track{" "}
          <strong className="text-white">cannot guarantee data backup</strong>. If you switch
          devices, lose your device, or uninstall the application, your data will be{" "}
          <strong className="text-white">permanently lost</strong> and cannot be recovered. We
          strongly recommend backing up your device regularly using your operating system's built-in
          backup tools.
        </p>
      </Section>

      <Section title="2. Fitness Application Purpose">
        <p>
          Fit Track is designed <Highlight>exclusively for fitness tracking</Highlight> purposes —
          including logging workouts, monitoring body metrics, tracking progress, and using the AI
          Coach for personalized fitness plans.
        </p>
        <p>
          The app is intended to be used as a fitness companion. Using Fit Track for purposes
          unrelated to health and fitness may result in a degraded experience.
        </p>
      </Section>

      <Section title="3. AI Coach — Data Usage">
        <p>
          When you interact with the <Highlight>AI Coach</Highlight> feature, the following applies:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Your <strong className="text-white">chat messages and fitness data</strong> are sent to
            an AI API to generate personalized responses and plans.
          </li>
          <li>
            Your <strong className="text-white">AI chat history is stored on our servers</strong>{" "}
            and may be used in the future to improve AI accuracy through machine learning and model
            training.
          </li>
          <li>
            The AI Coach can <strong className="text-white">make mistakes</strong>. Responses are
            generated automatically and may not always be accurate, complete, or suitable for your
            specific health condition. Always consult a professional for medical or nutritional
            advice.
          </li>
          <li>
            The AI Coach generates plans <Highlight>based on the data you provide</Highlight>. The
            more complete and accurate your fitness data, the more tailored and effective your plans
            will be.
          </li>
        </ul>
      </Section>

      <Section title="4. AI Coach — Usage Quotas">
        <p>
          The AI Coach is subject to <Highlight>usage quotas</Highlight>. There are limits on how
          many requests you can make within a given period to ensure fair access for all users.
        </p>
        <p>
          If you use the AI Coach feature for purposes{" "}
          <strong className="text-white">outside of fitness and health-related topics</strong>, you
          may be <strong className="text-white">restricted from using the AI feature</strong>. This
          includes using the AI for general-purpose conversations, non-fitness queries, or any
          activity that violates our Terms &amp; Conditions.
        </p>
      </Section>

      <Section title="5. Third-Party AI Services">
        <p>
          The AI Coach may be powered by one or more of the following third-party AI providers,
          depending on the model selected or assigned to your session:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-white">Google Gemini</strong> — by Google DeepMind
          </li>
          <li>
            <strong className="text-white">OpenAI (GPT models)</strong> — by OpenAI
          </li>
          <li>
            <strong className="text-white">Claude</strong> — by Anthropic
          </li>
          <li>
            <strong className="text-white">DeepSeek</strong> — by DeepSeek AI
          </li>
          <li>
            <strong className="text-white">Kimi</strong> — by Moonshot AI
          </li>
        </ul>
        <p>
          By using the AI Coach, you acknowledge that your messages and relevant fitness data will
          be processed by the applicable third-party AI service according to their own privacy
          policies. We encourage you to review the privacy policy of the underlying AI provider
          whose model is active during your session.
        </p>
      </Section>

      <Section title="6. Your Data &amp; Our Commitment">
        <p>
          Outside of the AI Coach feature, Fit Track does{" "}
          <strong className="text-white">not</strong> collect, transmit, or share:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Your workout logs or body measurements</li>
          <li>Your personal goals or progress history</li>
          <li>Any personally identifiable information</li>
        </ul>
        <p>
          This data currently remains entirely on your device and is not accessible to us or any
          third party (outside of AI Coach interactions).
        </p>
        <p>
          <Highlight>Looking ahead</Highlight> — we are planning to introduce an optional{" "}
          <strong className="text-white">data backup feature</strong> in a future update, which will
          allow you to securely back up your fitness data. This feature will be fully opt-in and
          clearly communicated before any data leaves your device.
        </p>
        <p>
          Regardless of any future features, we make the following commitment:{" "}
          <strong className="text-white">
            we will never sell, rent, or share your personal health or fitness data with any
            third party for commercial purposes.
          </strong>{" "}
          We deeply respect the sensitivity of health and personal data, and your trust is the
          foundation of everything we build.
        </p>
      </Section>

      <Section title="7. Data Retention">
        <p>
          <Highlight>Local Data</Highlight> — All fitness data stored locally on your device
          (workout logs, body measurements, goals, and personal settings) is retained on your device
          for as long as the app is installed. This data is{" "}
          <strong className="text-white">automatically deleted</strong> when you uninstall the app
          or clear the app's data through your device settings.
        </p>
        <p>
          <Highlight>AI Chat History</Highlight> — Your AI Coach chat history and related fitness
          data sent to our servers are retained for a maximum of{" "}
          <strong className="text-white">12 months</strong> from the date of your last interaction
          with the AI Coach. After this period, your chat data is automatically and permanently
          deleted from our servers. You may also request earlier deletion at any time (see Section 8
          below).
        </p>
        <p>
          <Highlight>Account Data</Highlight> — If you create an account, basic account information
          (such as your email address) is retained for as long as your account is active. Upon
          account deletion, all associated data is permanently removed within{" "}
          <strong className="text-white">30 days</strong>.
        </p>
      </Section>

      <Section title="8. Data Deletion">
        <p>
          You have the right to request the deletion of your data at any time. Here is how you can
          delete your data:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-white">Local Data</strong> — You can delete all locally stored
            fitness data by uninstalling the Fit Track app from your device, or by clearing the
            app's data through your device's Settings → Apps → Fit Track → Clear Data.
          </li>
          <li>
            <strong className="text-white">AI Chat History</strong> — To request deletion of your
            AI Coach chat history stored on our servers, send an email to{" "}
            <a
              href="mailto:support@tangiblespark.com"
              className="text-green-400 underline hover:text-green-300"
            >
              support@tangiblespark.com
            </a>{" "}
            with the subject line{" "}
            <strong className="text-white">"Data Deletion Request"</strong>. Include your account
            email or user identifier so we can locate your data.
          </li>
          <li>
            <strong className="text-white">Account Deletion</strong> — To delete your account and
            all associated data, contact us at{" "}
            <a
              href="mailto:support@tangiblespark.com"
              className="text-green-400 underline hover:text-green-300"
            >
              support@tangiblespark.com
            </a>{" "}
            with the subject line{" "}
            <strong className="text-white">"Account Deletion Request"</strong>.
          </li>
        </ul>
        <p>
          We will process all deletion requests within{" "}
          <strong className="text-white">30 days</strong> of receiving them. You will receive a
          confirmation email once your data has been deleted. Please note that once data is deleted,
          it <strong className="text-white">cannot be recovered</strong>.
        </p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected with an
          updated date at the top of this page. Continued use of the app after changes constitutes
          acceptance of the new policy.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us through
          the support channels listed on our website.
        </p>
      </Section>
    </div>
  );
}

export default PrivacyPolicyPage;