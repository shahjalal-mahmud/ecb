import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const RegistrationModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
  }

  const handleClose = () => {
    onClose()
    setIsSubmitted(false)
    reset()
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl relative">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="btn btn-sm btn-circle absolute right-4 top-4"
          aria-label="Close registration modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-poppins font-bold text-ecb-dark mb-2">
              Join English Carnival
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below to register for our programs and events
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`input input-bordered w-full ${
                      errors.fullName ? 'input-error' : ''
                    }`}
                    {...register('fullName', { 
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.fullName && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.fullName.message}
                      </span>
                    </label>
                  )}
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className={`input input-bordered w-full ${
                      errors.email ? 'input-error' : ''
                    }`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.email.message}
                      </span>
                    </label>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className={`input input-bordered w-full ${
                      errors.phone ? 'input-error' : ''
                    }`}
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\+?880?1[3-9]\d{8}$/,
                        message: 'Please enter a valid Bangladeshi phone number'
                      }
                    })}
                  />
                  {errors.phone && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.phone.message}
                      </span>
                    </label>
                  )}
                </div>

                {/* Age */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Age *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="18"
                    min="13"
                    max="35"
                    className={`input input-bordered w-full ${
                      errors.age ? 'input-error' : ''
                    }`}
                    {...register('age', { 
                      required: 'Age is required',
                      min: {
                        value: 13,
                        message: 'Must be at least 13 years old'
                      },
                      max: {
                        value: 35,
                        message: 'Must be 35 years or younger'
                      }
                    })}
                  />
                  {errors.age && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.age.message}
                      </span>
                    </label>
                  )}
                </div>
              </div>

              {/* Institution */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Educational Institution *</span>
                </label>
                <input
                  type="text"
                  placeholder="Your school/college/university"
                  className={`input input-bordered w-full ${
                    errors.institution ? 'input-error' : ''
                  }`}
                  {...register('institution', { 
                    required: 'Institution name is required'
                  })}
                />
                {errors.institution && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.institution.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Program Interest */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Program of Interest</span>
                </label>
                <select 
                  className="select select-bordered w-full"
                  {...register('programInterest')}
                >
                  <option value="">Select a program</option>
                  <option value="olympiad">National English Olympiad</option>
                  <option value="debate">Debate Competition</option>
                  <option value="summit">Youth Leadership Summit</option>
                  <option value="workshop">Skill Development Workshop</option>
                  <option value="volunteer">Volunteer Program</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message (Optional)</span>
                </label>
                <textarea
                  placeholder="Tell us about your expectations or any questions..."
                  className="textarea textarea-bordered w-full h-24"
                  {...register('message')}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8">
                <button 
                  type="submit"
                  className={`btn btn-gradient btn-lg ${
                    isSubmitting ? 'loading' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-ecb-dark mb-2">
              Registration Successful!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in English Carnival Bangladesh. We've received your registration 
              and will contact you shortly with more details.
            </p>
            <button 
              onClick={handleClose}
              className="btn btn-gradient"
            >
              Close
            </button>
          </div>
        )}
      </div>
      
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
  )
}

export default RegistrationModal