function ImageItem({image,index}) {
    console.log(image);
    return (
        <div>
            <img
                className="imageItem"
                alt={image.alt_description}
                key={index}
                src={image.urls.small}
            />
        </div>
    );
}

export default ImageItem;
