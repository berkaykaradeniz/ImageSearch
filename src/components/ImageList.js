import ImageItem from './ImageItem';

function ImageList({Images}) {
    console.log(Images);

    return (
        <div className="imageList">
            {Images.map((image, index) => {
                return (
                    <ImageItem alt="img" key={index} image={image} />
                );
            })}
        </div>
    );
}

export default ImageList;
