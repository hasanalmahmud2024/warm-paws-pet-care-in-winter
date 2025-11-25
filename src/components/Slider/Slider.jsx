import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const imageUrls = [
    "https://chat.mistral.ai/cdn-cgi/image/width=400,fit=scale-down/https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/73/77/95/73779562-c139-4caf-b5b6-c649d87dda0a/85c34f3a-8bc9-4259-b4d0-5337cf7fc65c/25dcd097-298d-4be5-95bb-cdd4f1902cb7/7c7db1df-05a9-4a12-9f07-d2f120c58468.jpg?sv=2025-01-05&st=2025-11-25T21%3A10%3A35Z&se=2025-11-25T22%3A10%3A35Z&sr=b&sp=rade&sig=vc%2Bxh1%2B5EXBdoPy7t7xmGsz6HLmxME9gaMzN9sjawvY%3D",
    "https://chat.mistral.ai/cdn-cgi/image/width=400,fit=scale-down/https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/73/77/95/73779562-c139-4caf-b5b6-c649d87dda0a/85c34f3a-8bc9-4259-b4d0-5337cf7fc65c/1c81cf59-33de-4ce1-a649-37411fa31f36/21c29c7d-dd7f-402a-8124-ac970ed06b34.jpg?sv=2025-01-05&st=2025-11-25T21%3A11%3A33Z&se=2025-11-25T22%3A11%3A33Z&sr=b&sp=rade&sig=J8pCQzotOIapolqUuk6NYsZr913lU2i8a3BG1%2BrcIrk%3D",
    "https://images.unsplash.com/photo-1719752585472-ddc1cc7edbf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZyUyMGNhcmV8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1528846104175-4fd300ee59da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBldCUyMGNhcmV8ZW58MHx8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1611173622933-91942d394b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwY2FyZXxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1625321150203-cea4bee44b54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1759164955427-14ca448a839d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBldCUyMGNhcmV8ZW58MHx8MHx8fDI%3D",
]

const Slider = () => {
    return (
        <div className=''>
            <Swiper modules={[Autoplay, Pagination]} autoplay pagination={{ clickable: true }} loop={true}>
                {imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={url}
                            className="object-cover w-full h-64 lg:h-96"
                            alt={`pet image ${index}`} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Slider;