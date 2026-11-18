import Image from 'next/image';
import {deadlineLabel, deadlinePassed, forum, meetingDateLabel} from '@/lib/forum';

export default function FormPage() {
  const closed = deadlinePassed('registration') || process.env.FORUM_FORMS_ENABLED === 'false';
  return (
    <div className="container registration-page">
      <header className="registration-heading">
        <p className="event-dateline">AstroConnect 2026 <span aria-hidden="true">/</span> Beijing</p>
        <h1>Registration</h1>
        <p>{meetingDateLabel} · No registration fee · Up to {forum.participantLimit} participants</p>
      </header>
      {closed ? <p role="status">Registration is closed.</p> : (
        <section className="registration-entry" aria-labelledby="registration-entry-title">
          <div className="registration-instructions">
            <h2 id="registration-entry-title">Register on Tencent Docs</h2>
            <p>Open the registration form using the link below, or scan the QR code with your phone.</p>
            <a className="button" href={forum.registrationUrl} target="_blank" rel="noopener noreferrer">
              Open registration form
            </a>
            <div className="registration-dates-list">
              <h3>Important dates</h3>
              <dl>
                <div><dt>Talk and poster abstracts</dt><dd><time dateTime={forum.abstractDeadline}>{deadlineLabel(forum.abstractDeadline)}</time></dd></div>
                <div><dt>Attend-only registration</dt><dd><time dateTime={forum.registrationDeadline}>{deadlineLabel(forum.registrationDeadline)}</time></dd></div>
                <div><dt>Programme announcement</dt><dd><time dateTime={forum.programmeAnnouncement}>{deadlineLabel(forum.programmeAnnouncement)}</time></dd></div>
              </dl>
              <small>Abstracts and attend-only registrations are due by 23:59 Beijing time (UTC+8) on their respective dates.</small>
            </div>
          </div>
          <figure className="registration-qr">
            <Image src="/images/tencent-registration.png" alt="QR code for the AstroConnect 2026 registration form on Tencent Docs" width={1568} height={1568} preload/>
            <figcaption>Scan to register</figcaption>
          </figure>
        </section>
      )}
    </div>
  );
}
