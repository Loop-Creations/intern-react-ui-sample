import TextInput from '../../components/TextInput/TextInput';
import TwoChoiceInput from '../../components/TwoChoiceInput/TwoChoiceInput';
import TextareaInput from '../../components/TextareaInput/TextareaInput';
import cross from '../../assets/close.png';
import styles from './Form.module.css';
import Dropdownarea from '../../components/Dropdown/Dropdownarea'
import Dropdownarea2 from '../../components/Dropdown/Dropdownarea2'
import { useState } from 'react';
function Form() {
    return (
        <div className={styles.container}>
            <form>
                <FormSectionOne />
                <FormSectionTwo />
                <FormSectionThree />
                <FormSavebutton/>
            </form>
        </div>
    )
}

function FormSectionOne() {
    const [selected, setSelected] = useState("");
    return (
        <div className={[styles.form_section, styles.section_1].join(" ")}>
            <div className={styles.form_section_header}>
                <h2>Doorstep Delivery Request Form</h2>
            </div>
            <div className={styles.form_section_body}>
                <div>
                    <TextInput id="1" label="Demand ID" />
                    <TextInput id="2" label="Destination Account Name" />
                    <TextInput id="3" label="Recipient Name" />
                </div>
                <div>
                    {/* <TextInput id="4" label="Order Type" /> */}
                    <Dropdownarea selected={selected} setSelected={setSelected}/>
                    {/* <TextInput id="5" label="Destination Type" /> */}
                    <Dropdownarea2 selected={selected} setSelected={setSelected} />
                    <TextInput id="6" label="Recipient Contact" />
                </div>
            </div>
        </div>
    )
}

function FormSectionTwo() {
    return (
        <div className={[styles.form_section, styles.section_2].join(" ")}>
            <div className={styles.form_section_body}>
                <div>
                    <span>
                        <h3>PART BUNDLE INFORMATION</h3>
                    </span>
                    <TextInput id="7" label="Part Number" />
                    <TextInput id="8" label="Brand" />
                    <TextInput id="9" label="Part Description" />
                    <TextInput id="10" label="Quantity" />
                    <span>
                        <button type="button">+ ADD PART BUNDLE</button>
                    </span>
                </div>
                <div className={styles.orders}>
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    )
}

function FormSectionThree() {
    return (
        <div className={[styles.form_section, styles.section_3].join(" ")}>
            <div className={styles.form_section_body}>
                <div>
                    <TextInput id="11" label="Destination Address" />
                    <TextInput id="12" label="Order Value(Rs.)" />
                </div>
                <div>
                    <TextInput id="13" label="Case Priority" />
                    <TwoChoiceInput id="14" label="Advance Status" />
                </div>
                <div className={styles.span_input}>
                    <TextareaInput id="14" label="Add Comment"/>
                </div>
                
            </div>
        </div>
    )
}
function FormSavebutton() {
    return (
        <div className={styles.savebutton}>
            <span>
                <button type="button">Save</button>
            </span>
        </div>
    )
}
function OrderItem() {
    return (
        <div className={styles.order}>
            <header>
                <img src={cross} />
            </header>
            <span>
                <p>Part No:</p>
                <p>4837419074</p>
            </span>
            <span>
                <p>Brand:</p>
                <p>Mahindra</p>
            </span>
            <span>
                <p>Part Des:</p>
                <p>Clutch Brakes</p>
            </span>
            <span>
                <p>Quantity:</p>
                <p>2</p>
            </span>
        </div>
    )
}

export default Form;
