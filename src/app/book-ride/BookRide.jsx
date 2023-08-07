import React from 'react'
import BookRideNavbar from './BookRideNavbar'
import { useFormik } from 'formik'
// import {BookmarkRemoveOutlined} from '@mui/icons-material'
import * as Yup from "yup"


const validationSchema=Yup.object().shape({
    pickupLocation:Yup.string().required("Pickup location is required"),
    destinationLocation:Yup.string().required(
        "Destination location is required"
    ),
});
const BookRide = () => {
    const handleOnSubmit=(values)=>{
        console.log(values)
    }
    // const SignupForm = () => {
        
        const formik = useFormik({
          initialValues: {
            pickupLocation: '',
          },
          validationSchema,
          onSubmit: values => {
            handleOnSubmit(values)
          }, 
        });
        const onFocused=()=>{

        }
  return (
    <div className='w-full'>
        
        <BookRideNavbar/>
        <div className='px-3 mt-10 lg:px-5'>
        <form action="">
             <div>
             <div className="relative flex items-center p-2 border">
                <p className="pr-3">From</p>
            <input
                name="pickupLocation"
                placeholder="Enter Pickup Location"
                value={formik.values.pickupLocation}
                onChange={(event) => {
                const value = event.target.value;
                formik.setFieldValue("pickuplocation", value);
                // dispatch(searchLocation (value));
            }}
            onblur={formik.handleBlur}
            className="border-none outline-none"
            onFocus={onFocused}
            />
            {/* {activeField ==="pickupLocation" &&
                ride.results?length> 0 &&
                formik.values.pickupLocation &&(
                <div className=''>
                    <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={'pickup_latitude'}
                    longitude_key={'pickup_longitude'}
                    area_key={'pickup_area'}
                    />
                </div>
                )
                } */}
             </div>
             {formik.touched.pickupLocation && formik.errors.pickupLocation&&(
                <div className=''>
                    <p className='px-2 text-xs text-red-500'>
                        {formik.errors.pickupLocation}
                    </p>
                </div>
             )}
         </div>    
        </form>
        </div>
    </div>
  )
};
// }
export default BookRide
