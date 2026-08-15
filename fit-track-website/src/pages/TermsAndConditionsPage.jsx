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
  return <span className="text-green-400 font-medium">{children}</span>;
}

function TermsAndConditionsPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm">Last Updated: August 15, 2026</p>
      </div>

      {/* Intro */}
      <p className="text-gray-400 leading-relaxed mb-10">
        By downloading, installing, or using <Highlight>Fit Track</Highlight>, you agree to be
        bound by these Terms &amp; Conditions. If you do not agree, please do not use the
        application.
      </p>

      <Section title="1. Acceptance of Terms">
        <p>
          These Terms &amp; Conditions govern your use of the Fit Track mobile application. By
          accessing or using the app, you confirm that you are at least{" "}
          <strong className="text-white">13 years of age</strong> and that you accept these terms
          in full.
        </p>
      </Section>

      <Section title="2. Purpose of the Application">
        <p>
          Fit Track is a <Highlight>fitness tracking application</Highlight> designed to help users
          log workouts, monitor body metrics, track goals, and receive AI-generated fitness
          guidance. It is intended solely for personal, non-commercial health and fitness purposes.
        </p>
        <p>
          You agree to use Fit Track only for its intended fitness-related purposes. Using the app
          for any other purpose is a violation of these terms.
        </p>
      </Section>

      <Section title="3. Data &amp; No Backup Guarantee">
        <p>
          All personal fitness data (workout logs, measurements, goals) is stored{" "}
          <strong className="text-white">locally on your device</strong>. Fit Track does not
          provide cloud synchronization or backup for this data.
        </p>
        <p>
          You acknowledge and accept that Fit Track{" "}
          <Highlight>cannot guarantee data recovery</Highlight> in the event of device loss,
          device switching, app uninstallation, or device failure. Fit Track holds no liability for
          any loss of data under these circumstances.
        </p>
      </Section>

      <Section title="4. AI Coach Usage">
        <p>
          The AI Coach feature is available within Fit Track to provide personalized fitness
          recommendations and plans. By using the AI Coach, you agree to the following:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Your <strong className="text-white">chat messages and relevant fitness data</strong>{" "}
            will be transmitted to an AI API for processing.
          </li>
          <li>
            Your AI chat history <strong className="text-white">may be stored on our servers</strong>{" "}
            and used in the future to improve AI accuracy through machine learning.
          </li>
          <li>
            The AI Coach may <strong className="text-white">produce inaccurate or incomplete
            recommendations</strong>. You use the AI Coach at your own discretion and risk.
          </li>
          <li>
            The quality of AI-generated plans depends on the{" "}
            <Highlight>completeness and accuracy of your fitness data</Highlight>. More data leads
            to more accurate plans.
          </li>
        </ul>
      </Section>

      <Section title="5. AI Coach — Quotas &amp; Acceptable Use">
        <p>
          The AI Coach is subject to <Highlight>usage quotas</Highlight> to ensure fair and
          sustainable access for all users. Quotas may be enforced on a per-day, per-week, or
          per-account basis and are subject to change.
        </p>
        <p>
          You agree to use the AI Coach <strong className="text-white">only for
          fitness-related queries and planning</strong>. Using the AI Coach for topics unrelated to
          health and fitness — including but not limited to general knowledge questions,
          entertainment, or any activity outside the scope of the app — may result in:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Temporary or permanent restriction of your AI Coach access</li>
          <li>Reduction of your available quota</li>
          <li>Suspension of your account in severe or repeated cases</li>
        </ul>
      </Section>

      <Section title="6. Health Disclaimer">
        <p>
          Fit Track and the AI Coach are <strong className="text-white">not medical devices</strong>{" "}
          and are not intended to diagnose, treat, cure, or prevent any medical condition. All
          information provided by the app is for general fitness and informational purposes only.
        </p>
        <p>
          Always consult a qualified healthcare professional before starting any new exercise
          program, diet, or fitness regimen, especially if you have a pre-existing health condition.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Fit Track and its developers shall not be liable
          for:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Any loss of data resulting from device issues, uninstallation, or switching devices</li>
          <li>
            Any injury, health issue, or damages resulting from following AI Coach recommendations
          </li>
          <li>Any service interruptions, bugs, or technical failures</li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        <p>
          All content, branding, and features within Fit Track are the intellectual property of the
          Fit Track development team. You may not reproduce, distribute, or create derivative works
          without prior written permission.
        </p>
      </Section>

      <Section title="9. Changes to Terms">
        <p>
          We reserve the right to update or modify these Terms &amp; Conditions at any time.
          Changes will be reflected with an updated date at the top of this page. Continued use of
          the app after changes are posted constitutes acceptance of the revised terms.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These Terms &amp; Conditions are governed by and construed in accordance with applicable
          law. Any disputes arising from the use of Fit Track will be resolved in the appropriate
          jurisdiction.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          If you have any questions about these Terms &amp; Conditions, please reach out through
          the support channels listed on our website.
        </p>
      </Section>
    </div>
  );
}

export default TermsAndConditionsPage;
