import { Send, Link2, FileText, AlertCircle, CheckCircle2, Mail, Globe, Shield, Sparkles, Award, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function SubmitPage() {
  const { t } = useTranslation(undefined, { keyPrefix: "submit" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    country: "",
    resourceType: "tool",
    resourceName: "",
    resourceUrl: "",
    description: "",
    tags: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const response = await fetch('http://localhost/media-toolkit/api/submit-resource.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      
      const responseText = await response.text();
      let result;
      
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Invalid JSON response:', responseText);
        throw new Error('Invalid response from server. Please check WAMP error logs.');
      }
      
      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: result.message || t("form.messages.successFallback")
        });
        
        setFormData({
          name: "",
          email: "",
          organization: "",
          country: "",
          resourceType: "tool",
          resourceName: "",
          resourceUrl: "",
          description: "",
          tags: "",
          consent: false
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.message || t("form.messages.errorFallback")
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitMessage({
        type: 'error',
        text: `${t("form.messages.networkErrorPrefix")} ${errorMessage}. ${t("form.messages.networkErrorSuffix")}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const benefits = [
    {
      icon: Award,
      title: t("benefits.items.0.title"),
      desc: t("benefits.items.0.desc"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: t("benefits.items.1.title"),
      desc: t("benefits.items.1.desc"),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: t("benefits.items.2.title"),
      desc: t("benefits.items.2.desc"),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Sparkles,
      title: t("benefits.items.3.title"),
      desc: t("benefits.items.3.desc"),
      color: "from-red-500 to-red-600"
    }
  ];

  const reviewSteps = [
    {
      number: t("review.steps.0.number"),
      title: t("review.steps.0.title"),
      desc: t("review.steps.0.desc"),
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: t("review.steps.1.number"),
      title: t("review.steps.1.title"),
      desc: t("review.steps.1.desc"),
      icon: Shield,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: t("review.steps.2.number"),
      title: t("review.steps.2.title"),
      desc: t("review.steps.2.desc"),
      icon: CheckCircle2,
      color: "from-green-500 to-green-600"
    },
    {
      number: t("review.steps.3.number"),
      title: t("review.steps.3.title"),
      desc: t("review.steps.3.desc"),
      icon: Mail,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-8 md:px-16 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Animated gradient blobs - About page style */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto"
            >
              <div className="absolute inset-0 bg-[#f65d5d] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                <Send className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-block mx-auto">
                <span className="bg-[#f65d5d] text-white px-6 py-2 rounded-full text-sm tracking-wide">
                  {t("hero.badge")}
                </span>
              </div>
              <h1 className="text-white text-5xl md:text-7xl tracking-tight leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
            </motion.div>
            
            {/* Success/Error Message */}
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-2xl border-2 ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-500/20 border-green-400 text-white backdrop-blur-sm' 
                    : 'bg-red-500/20 border-red-400 text-white backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center gap-3 justify-center">
                  {submitMessage.type === 'success' ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <AlertCircle className="w-6 h-6" />
                  )}
                  <p className="text-lg">{submitMessage.text}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why Contribute Section - NEW */}
      <section className="bg-white px-8 md:px-16 py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm mb-4">
              {t("why.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-4xl md:text-6xl tracking-tight mb-6">{t("why.title")}</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#0c0c09] text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form Section - Enhanced */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-8 md:px-16 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#0c0c09] text-4xl md:text-5xl tracking-tight mb-4">{t("form.title")}</h2>
            <p className="text-gray-600 text-lg">{t("form.requiredNote")}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            <div className="space-y-8">
              {/* Contact Information Section */}
              <div className="pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#0c0c09] text-2xl">{t("form.sections.yourInfo")}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.name.label")} <span className="text-[#f65d5d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                      placeholder={t("form.fields.name.placeholder")}
                    />
                  </div>
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.email.label")} <span className="text-[#f65d5d]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                      placeholder={t("form.fields.email.placeholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.organization.label")}
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                      placeholder={t("form.fields.organization.placeholder")}
                    />
                  </div>
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.country.label")} <span className="text-[#f65d5d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                      placeholder={t("form.fields.country.placeholder")}
                    />
                  </div>
                </div>
              </div>

              {/* Resource Information Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#0c0c09] text-2xl">{t("form.sections.resourceDetails")}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.resourceType.label")} <span className="text-[#f65d5d]">*</span>
                    </label>
                    <select
                      name="resourceType"
                      value={formData.resourceType}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors bg-white"
                    >
                      <option value="tool">{t("form.fields.resourceType.options.tool")}</option>
                      <option value="handbook">{t("form.fields.resourceType.options.handbook")}</option>
                      <option value="training">{t("form.fields.resourceType.options.training")}</option>
                      <option value="video">{t("form.fields.resourceType.options.video")}</option>
                      <option value="data">{t("form.fields.resourceType.options.data")}</option>
                      <option value="other">{t("form.fields.resourceType.options.other")}</option>
                      <option value="broken">{t("form.fields.resourceType.options.broken")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#0c0c09] block mb-2">
                      {t("form.fields.resourceName.label")} <span className="text-[#f65d5d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="resourceName"
                      value={formData.resourceName}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                      placeholder={t("form.fields.resourceName.placeholder")}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-[#0c0c09] block mb-2">
                    {t("form.fields.resourceUrl.label")} <span className="text-[#f65d5d]">*</span>
                  </label>
                  <input
                    type="url"
                    name="resourceUrl"
                    value={formData.resourceUrl}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                    placeholder={t("form.fields.resourceUrl.placeholder")}
                  />
                </div>

                <div className="mt-6">
                  <label className="text-[#0c0c09] block mb-2">
                    {t("form.fields.description.label")} <span className="text-[#f65d5d]">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors resize-none"
                    placeholder={t("form.fields.description.placeholder")}
                  />
                </div>

                <div className="mt-6">
                  <label className="text-[#0c0c09] block mb-2">
                    {t("form.fields.tags.label")}
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-[#0c0c09] focus:border-[#f65d5d] focus:outline-none transition-colors"
                    placeholder={t("form.fields.tags.placeholder")}
                  />
                </div>
              </div>

              {/* Consent Section */}
              <div className="pt-8 border-t border-gray-200">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-[#f65d5d] border-2 border-gray-300 rounded focus:ring-[#f65d5d]"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {t("form.fields.consent.label")} <span className="text-[#f65d5d]">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#f65d5d] to-[#e54d4d] text-white px-8 py-5 text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t("form.submit.loading")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("form.submit.idle")}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Review Process Section - NEW */}
      <section className="bg-white px-8 md:px-16 py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm mb-4">
              {t("review.badge")}
            </div>
            <h2 className="text-[#0c0c09] text-4xl md:text-6xl tracking-tight mb-6">{t("review.title")}</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              {t("review.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl hover:border-[#f65d5d] transition-all duration-300"
              >
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg text-white text-xl`}>
                  {step.number}
                </div>
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mt-4`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0c0c09] text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8 text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-[#0c0c09] text-2xl mb-3">{t("review.timeline.title")}</h3>
            <p className="text-gray-700 text-lg">
              {t("review.timeline.prefix")} <span className="text-blue-600">{t("review.timeline.highlight")}</span>. {t("review.timeline.suffix")}
            </p>
          </div>
        </div>
      </section>

      {/* General Feedback Section - Enhanced */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-8 md:px-16 py-20 md:py-28">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#f65d5d] to-[#e54d4d] rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-[#0c0c09] text-4xl md:text-5xl mb-6">{t("feedback.title")}</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {t("feedback.subtitle")}
            </p>
            <a 
              href="mailto:u18103921@sharjah.ac.ae?subject=Media%20Toolkit%20Feedback" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              {t("feedback.cta")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
