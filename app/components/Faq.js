import React from 'react';
import Header from './Header';
import Footer from './Footer';

const styles = {

    main: {
        width: '80%',
        margin: '50px auto 100px'
    },

    heavy: {
        fontWeight: '700'
    },

    fade: {
        fontWeight: '200',
        opacity: '0.5'
    },

    faq: {
        width: '80%'
    },

    ulPush: {
        marginBottom: '10px'
    },

    questionContainer: {
        marginBottom: '50px'
    },

    questionLists: {
        listStyleType: 'none',
    },

    answer: {
        marginLeft: '25px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },

    question: {
        fontWeight: '700',
        marginBottom: '20px'
    }
};

class Faq extends React.Component {

    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Header />

                <div className="container">
                    <div style={ styles.main }>
                        <h1 style={ styles.heavy }> Questions? Look here. </h1>
                        <h4 style={ styles.fade }> Can't find an answer? Call us at (408) 831-1531 or email hello@goldenstatemaids.com </h4>
                    </div>
                </div>

                <div className="container" style={ styles.faq }>

                    <div style={ styles.questionContainer }>

                        <h4 style={ styles.fade }> General </h4>

                        <ul style={ styles.questionLists }>
                            <li>
                                <h2 style={ styles.question }> How Does Golden State Maids work? </h2>

                                <div style={ styles.answer }>
                                    <p> We clean. You relax. </p>

                                    <p>
                                        Golden State maids is a company that has provided an easy way to book, schedule, and manage all your cleaning appointments online.
                                        Our cleaners are employed (not teps or 1099 contractors), insured and bonded, and trained to deliver on GSM's 50 Point Checklist.
                                    </p>

                                    <p> When you're ready to relax, book & we'll send one of our cleaning professionals to make your space sparkle! </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> Does somebody need to be present? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Whether or not you're at the space during your cleaning appointment is up to you!
                                        When you make a booking, you'll be prompted to give us entry instructions.
                                        If you have a doorman or can hide a key somewhere, there's no need for you to be home.
                                        Or, feel free to stick around during the clean. Whatever you're most comfortable with is fine.
                                    </p>

                                    <p>
                                        In any case, please don't forget about your appointments.
                                        We'll remind you with an email or text message, but if the cleaner can't get in the door by following your entry instructions, or if you aren't home when you said you would be, you'll be charged a lock-out fee.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> Is Golden State Maids insured and bonded? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Yes, GSM is insured and bonded.
                                        We understand that it is a privilege to be in your home, and we are always careful.
                                        In the unlikely event that an object is damaged, please notify us within 48 hours of when the appointment is completed either by email at
                                        <a href="email:hello@goldenstatemaids.com" type="email"> hello@goldenstatemaids.com </a>
                                        or by phone at
                                        <a href="tel:(408) 831-1531" type="phone"> (408) 831-1531</a>.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> Is Golden State Maids pet safe? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        We love animals, but they don't always love us.
                                        If you think your pet may become overly anxious while we are there, please make temporary arrangements while we are in your home.
                                        You can leave detailed pet instructions during the online scheduling process.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div style={ styles.questionContainer }>

                        <h4 style={ styles.fade }> Home Cleaning </h4>

                        <ul style={ styles.questionLists }>
                            <li>
                                <h2 style={ styles.question }> Do I need to provide cleaning supplies? </h2>

                                <div style={ styles.answer }>

                                    <p>
                                        We use and provide environmentally friendly supplies and nearly all equipment required for cleaning your apartment, with a few exceptions.
                                    </p>

                                    <p>
                                        We do not provide:
                                    </p>

                                    <ul style={ styles.ulPush }>
                                        <li> Vacuum </li>
                                        <li> Conventional mob & bucket </li>
                                        <li> Step stool </li>
                                        <li> Toilet Brush </li>
                                        <li>
                                            Specialty products, including, but not limited to:
                                                <ul>
                                                    <li> Heavy-duty bathroom cleaner </li>
                                                    <li> Wood cleaner </li>
                                                    <li> Bleach </li>
                                                    <li> Stainless steel cleaner </li>
                                                </ul>
                                        </li>
                                    </ul>

                                    <p>
                                        We are happy to use these items, if provided by you, and left out in clear view for our cleaning staff and accompanied by directions on their use.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> What if I do not have a mop, bucket, or vacuum? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Our cleaners bring a travel wet/dry mop that will be used on non-carpeted areas. If you do not have a vacuum, the cleaner will not be able to properly clean any carpeted areas.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> What if I just had renovation work done? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        We provide a customized post-construction clean for these types of situations. Please contact us at 
                                        <a href="tel:(408) 831-1531" type="phone"> (408) 831-1531 </a>
                                        or email
                                        <a href="email:hello@goldenstatemaids.com" type="email"> hello@goldenstatemaids.com </a>
                                        to coordinate and receive this pricing information.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> Can I give specific instructions to the cleaners and ask for special requests? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Yes, special instructions can be left for the cleaning professional when you schedule your appointment online
                                         After the clean is complete, you can rate your GSM experience and provide feedback submitting to
                                        <a href="email:hello@goldenstatemaids.com" type="email"> hello@goldenstatemaids.com</a>.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>



                    <div style={ styles.questionContainer }>

                        <h4 style={ styles.fade }> Great Clean Guarantee </h4>

                        <ul style={ styles.questionLists }>
                            <li>
                                <h2 style={ styles.question }> What is the Great Clean Guarantee? </h2>

                                <div style={ styles.answer }>

                                    <p>
                                        We get it right or we make it right.
                                    </p>

                                    <p>
                                        If you're not satisfied with your clean, you can request a free reclean.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> How to request a reclean? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Customers can request a reclean either by email (
                                        <a href="email:hello@goldenstatemaids.com" type="email">hello@goldenstatemaids.com</a>
                                        ) or by phone
                                        <a href="tel:(408) 831-1531" type="phone"> (408) 831-1531 </a>
                                        as long as the appointment was completed within the past
                                        <b> 48 hours</b>
                                        . The reclean appointment must be scheduled and completed within 72 hours of contact.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> How many recleans can be booked using the Great Clean Guarantee benefit? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        There is no specific limit on how many recleans a customer can receive.
                                        We want to ensure fair use of the benefit and guarantee a great experience every time.
                                        With that said, we reserve the right to require additional time and budget for future cleans and/or void the guarantee for future cleans (if requested excessively).
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> What is and is not eligible for a Great Clean Guarantee? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Appointments completed within the past 48 hours are eligible for the Great Clean Guarantee.
                                    </p>

                                    <ul style={ styles.ulPush }>
                                        <li> Appointments completed more than 48 hours ago </li>
                                        <li> Items not included on the 50 Point Checklist </li>
                                        <li> Free cleans </li>
                                        <li> Recleans </li>
                                        <li> Homes not in standard condition (eg: biohazards, hoarding, etc.) </li>
                                        <li> Extra services not booked for original appointment </li>
                                        <li> Post-construction/post-renovation cleans </li>
                                        <li> Move-out cleans </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>



                    <div style={ styles.questionContainer }>

                        <h4 style={ styles.fade }> Billing </h4>

                        <ul style={ styles.questionLists }>
                            <li>
                                <h2 style={ styles.question }> How do I pay for my clean? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        We accept all major credit and debit cards with a MasterCard, Visa, Discover Network, American Express logo.
                                    </p>

                                    <p>
                                        We do not accept cash payment. Tips may be given in cash form (optional).
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> When does my card get charged? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Your credit card will be charged at midnight on the day that your appointment takes place.
                                        You will receive an automated email with the transaction summary to notify you when and how much your card is charged.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> How do I update my billing information? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        To switch your billing information, simply log into our online portal using your username and password and edit your billing information in the "Settings" section of the website.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> What is your Cancellation Policy? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        We assess a $50 cancellation fee to appointments not cancelled by 3PM EST the day before the appointment, unless that clean is a specialty clean.
                                        For specialty cleans (including but not limited to post-construction/post-renovation cleans), a cancellation fee amounting to 50% of the price quoted for that specialty clean will be applied to appointments not cancelled by 3PM EST the day before the appointment.
                                    </p>
                                </div>
                            </li>


                            <li>
                                <h2 style={ styles.question }> Do I leave a Tip? </h2>

                                <div style={ styles.answer }>
                                    <p>
                                        Tips are not required but are certainly appreciated by our cleaners.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
};

export default Faq;