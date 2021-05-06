import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProducts } from '../../actions/productActions';
import Form from '../../components/form/index';
import { useHistory, useParams } from 'react-router-dom';
import { submit } from '../../actions/submitActions';

const Appjs = styled.div`
    display: flex;
    justify-content: center;
`;

const Ctr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //font-size: calc(10px + 2vmin);
    color: white;
    margin: 50px 0 0 0;
    width: 90%;
`;

const EditForm = (props) => {
    const [values, setValues] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const products = useSelector((state) => state.products && state.products.products);
    const matchedProduct = products && products.find((each) => Number(each.id) === Number(id));
    const isPosting = useSelector((state) => state.submitReducer && state.submitReducer.isPosting);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const postForm = () => {
        dispatch(submit(id, values));
        history.push('/');
    };

    const budgetOptions = [
        { value: '$1-10', label: '$1-10' },
        { value: '$11-20', label: '$11-20' },
        { value: '$20-50', label: '$20-50' },
    ];

    const premierOptions = [
        { value: '$50-99', label: '$50-99' },
        { value: '$100-190', label: '$100-190' },
        { value: '$200+', label: '$200+' },
    ];

    const onFormChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValues({ ...values, [e.target.name]: value });
    };

    const onDropdownChange = (key, val) => {
        const newValues = { ...values };
        newValues[key] = val;
        setValues(newValues);
    };
    const onBack = () => {
        history.push('/');
    };

    return (
        <Appjs>
            <Ctr>
                <Form
                    values={values}
                    onFormChange={onFormChange}
                    options={matchedProduct && matchedProduct.price_tier === 'premium' ? premierOptions : budgetOptions}
                    postForm={postForm}
                    onDropdownChange={onDropdownChange}
                    isPosting={isPosting}
                    onBack={onBack}
                />
            </Ctr>
        </Appjs>
    );
};

export default EditForm;
