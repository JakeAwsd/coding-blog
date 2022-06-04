import { MdDeleteForever } from 'react-icons/md';

const Blog = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
			<button className='save' >
					ADD COMMENT
			</button>
		</div>
	);
};

export default Blog;
