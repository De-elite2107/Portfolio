import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { EMAIL } from "@/lib/site";

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: "+234 708 954 7793", href: "tel:+2347089547793" },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.link/3bl1ku" },
  { label: "LinkedIn", value: "delight-adediran", href: "https://www.linkedin.com/in/delight-adediran-7151b022a/" },
  { label: "GitHub", value: "De-elite2107", href: "https://github.com/De-elite2107" },
  { label: "X", value: "@DelightAdediran", href: "https://x.com/DelightAdediran" },
  { label: "Instagram", value: "@de_elite21", href: "https://www.instagram.com/de_elite21/" },
  { label: "Location", value: "Ikola Ogunseye, Lagos", href: "https://maps.app.goo.gl/gHrgVXChjT9sLAYC6" },
];

const schema = Yup.object({
  name: Yup.string().trim().required("Enter your name."),
  email: Yup.string().trim().email("Enter a valid email address.").required("Enter your email address."),
  phone: Yup.string()
    .trim()
    .matches(/^\+?[\d\s()-]{7,20}$/, {
      message: "Enter a phone number with digits only, or leave it blank.",
      excludeEmptyString: true,
    }),
  message: Yup.string().trim().required("Tell me a little about the project."),
});

type Values = Yup.InferType<typeof schema>;

export default function Contact() {
  // The form is kept filled after opening the draft: if no mail app handles
  // mailto:, the visitor still has their message to copy.
  const onSubmit = (values: Values) => {
    const subject = encodeURIComponent(`Project enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "Not given"}\n\n${values.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section--rule" id="contact" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__intro">
          <h2 className="section__title" id="contact-title">
            Start a project
          </h2>
          <p>
            Tell me what you are building and when you need it. The form opens a pre-filled email in your mail app,
            or you can reach me directly on any channel below.
          </p>
          <dl className="channels">
            {channels.map((c) => (
              <div key={c.label} className={c.label === "Email" ? "channels__wide" : undefined}>
                <dt>{c.label}</dt>
                <dd>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Formik<Values>
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form className="form" noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" autoComplete="name" />
              <ErrorMessage name="name" component="p" className="field__error" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" autoComplete="email" />
              <ErrorMessage name="email" component="p" className="field__error" />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone <span className="field__optional">(optional)</span>
              </label>
              <Field id="phone" name="phone" type="tel" autoComplete="tel" />
              <ErrorMessage name="phone" component="p" className="field__error" />
            </div>
            <div className="field">
              <label htmlFor="message">Project details</label>
              <Field id="message" name="message" as="textarea" rows={6} />
              <ErrorMessage name="message" component="p" className="field__error" />
            </div>
            <button className="button button--dark" type="submit">
              Open email draft
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
