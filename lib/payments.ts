import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
if (!stripeKey) {
  console.warn('⚠️ STRIPE_SECRET_KEY not found. Payment features will be disabled.')
}

export const stripe = stripeKey ? new Stripe(stripeKey) : null

export const STRIPE_PRODUCTS = {
  STARTER: 'price_starter_monthly',
  PRO: 'price_pro_monthly',
  ENTERPRISE: 'price_enterprise_monthly',
} as const

export async function createCheckoutSession(
  email: string,
  priceId: string,
  successUrl: string,
  cancelUrl: string
) {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    return session
  } catch (error) {
    console.error('Stripe checkout error:', error)
    throw error
  }
}

export async function getCustomerSubscriptions(customerId: string) {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 10,
    })

    return subscriptions.data
  } catch (error) {
    console.error('Stripe subscription error:', error)
    throw error
  }
}

export async function cancelSubscription(subscriptionId: string) {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }

  try {
    const cancelled = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    })

    return cancelled
  } catch (error) {
    console.error('Stripe cancellation error:', error)
    throw error
  }
}
