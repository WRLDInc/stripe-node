// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The SetupAttempt object.
     */
    interface SetupAttempt {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'setup_attempt';

      /**
       * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
       */
      application: string | Stripe.Application | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * ID of the payment method used with this SetupAttempt.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: SetupAttempt.PaymentMethodDetails;

      /**
       * The error encountered during this attempt to confirm the SetupIntent, if any.
       */
      setup_error: SetupAttempt.SetupError | null;

      /**
       * ID of the SetupIntent that this attempt belongs to.
       */
      setup_intent: string | Stripe.SetupIntent;

      /**
       * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
       */
      status: string;

      /**
       * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
       */
      usage: string;
    }

    namespace SetupAttempt {
      interface PaymentMethodDetails {
        card?: PaymentMethodDetails.Card;

        /**
         * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
         */
        type: string;
      }

      namespace PaymentMethodDetails {
        interface Card {
          /**
           * Populated if this authorization used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;
        }

        namespace Card {
          interface ThreeDSecure {
            /**
             * For authenticated transactions: how the customer was authenticated by
             * the issuing bank.
             */
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            /**
             * Indicates the outcome of 3D Secure authentication.
             */
            result: ThreeDSecure.Result;

            /**
             * Additional information about why 3D Secure succeeded or failed based
             * on the `result`.
             */
            result_reason: ThreeDSecure.ResultReason | null;

            /**
             * The version of 3D Secure that was used.
             */
            version: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AuthenticationFlow = 'challenge' | 'frictionless';

            type Result =
              | 'attempt_acknowledged'
              | 'authenticated'
              | 'failed'
              | 'not_supported'
              | 'processing_error';

            type ResultReason =
              | 'abandoned'
              | 'bypassed'
              | 'canceled'
              | 'card_not_enrolled'
              | 'network_not_supported'
              | 'protocol_error'
              | 'rejected';

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }
      }

      interface SetupError {
        /**
         * For card errors, the ID of the failed charge.
         */
        charge?: string;

        /**
         * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
         */
        code?: string;

        /**
         * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
         */
        decline_code?: string;

        /**
         * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
         */
        doc_url?: string;

        /**
         * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
         */
        message?: string;

        /**
         * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
         */
        param?: string;

        /**
         * A PaymentIntent guides you through the process of collecting a payment from your customer.
         * We recommend that you create exactly one PaymentIntent for each order or
         * customer session in your system. You can reference the PaymentIntent later to
         * see the history of payment attempts for a particular session.
         *
         * A PaymentIntent transitions through
         * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
         * throughout its lifetime as it interfaces with Stripe.js to perform
         * authentication flows and ultimately creates at most one successful charge.
         *
         * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents).
         */
        payment_intent?: Stripe.PaymentIntent;

        /**
         * PaymentMethod objects represent your customer's payment instruments.
         * They can be used with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or saved to
         * Customer objects to store instrument details for future payments.
         *
         * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
         */
        payment_method?: Stripe.PaymentMethod;

        /**
         * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
         * For example, you could use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
         * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
         *
         * Create a SetupIntent as soon as you're ready to collect your customer's payment credentials.
         * Do not maintain long-lived, unconfirmed SetupIntents as they may no longer be valid.
         * The SetupIntent then transitions through multiple [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as it guides
         * you through the setup process.
         *
         * Successful SetupIntents result in payment credentials that are optimized for future payments.
         * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) may need to be run through
         * [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) at the time of payment method collection
         * in order to streamline later [off-session payments](https://stripe.com/docs/payments/setup-intents).
         * If the SetupIntent is used with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer), upon success,
         * it will automatically attach the resulting payment method to that Customer.
         * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
         * PaymentIntents to save payment methods in order to prevent saving invalid or unoptimized payment methods.
         *
         * By using SetupIntents, you ensure that your customers experience the minimum set of required friction,
         * even as regulations change over time.
         *
         * Related guide: [Setup Intents API](https://stripe.com/docs/payments/setup-intents).
         */
        setup_intent?: Stripe.SetupIntent;

        source?: CustomerSource;

        /**
         * The type of error returned. One of `api_connection_error`, `api_error`, `authentication_error`, `card_error`, `idempotency_error`, `invalid_request_error`, or `rate_limit_error`
         */
        type: SetupError.Type;
      }

      namespace SetupError {
        type Type =
          | 'api_connection_error'
          | 'api_error'
          | 'authentication_error'
          | 'card_error'
          | 'idempotency_error'
          | 'invalid_request_error'
          | 'rate_limit_error';
      }
    }

    interface SetupAttemptListParams extends PaginationParams {
      /**
       * Only return SetupAttempts created by the SetupIntent specified by
       * this ID.
       */
      setup_intent: string;

      /**
       * A filter on the list, based on the object `created` field. The value
       * can be a string with an integer Unix timestamp, or it can be a
       * dictionary with a number of different query options.
       */
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SetupAttemptsResource {
      /**
       * Returns a list of SetupAttempts associated with a provided SetupIntent.
       */
      list(
        params: SetupAttemptListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SetupAttempt>;
    }
  }
}