import Button from '@mui/material/Button';

const BlueButton = ({ data, onButtonClick }: any) => {
  return (
    <div>
        <Button onClick={onButtonClick} variant='outlined' className='bg-[#8E49E7] text-white hover:bg-[#ae70ff] transition-all'>{data}</Button>
    </div>
  )
}

export default BlueButton