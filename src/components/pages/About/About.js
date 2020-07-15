import React from "react";

const About = () => {
	return (
		<div>
			<div
				className="rounded-circle mx-auto my-3 shadow-lg border  text-white  text-center display-4 bg-yellow "
				style={{
					width: "100px",
					height: "100px",
				}}
			>
				KK
			</div>
			<div
				className="rounded shadow-sm  mx-auto text-center  bg-yellow "
				style={{
					width: "90%",
					marginTop: "-50px",
				}}
			>
				<br />
				<p className="text-center text-white font-bold pt-2">Kiana</p>

				<p className="  text-white px-3  text-right ">
			این پروژه توسط کیانا کیایی برای درس طراحی مدار واسط ایجاد شده است
				</p>
				<p className="  text-white px-3  text-right ">
					
			ویژگی های این برنامه:
				</p>
				<p className="  px-3   text-white   text-right ">
					
					 استفاده از اخرین نسخه ری اکت و ری اکت هوک و ری اکت کنتکست.
						</p>
						<p className="px-3 text-bold     text-white text-right ">
					
					 همچنین ذخیره لیست در حافظه داخلی  که باعث میشود در صورت خروج از برنامه لیست در حافظه ماندگار شود
						</p>
						<p className="px-3 text-bold     text-white text-right ">
و قابلیت نصب به صورت اپ پیشرو  در اندروید و  ای او اس				
						</p>
				<p className="text-center pb-3  text-white">
					made by <span className="text-danger d-inline">Kiana </span> with 
					<span className="text-danger  shadow-lg text-white d-inline">
					{" "}hard-working
					</span>{" "}
					
				</p>
			</div>
		</div>
	);
};

export default About;
