package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_OnCircleClickListener implements com.google.android.gms.maps.GoogleMap.OnCircleClickListener {
	public GoogleMap_OnCircleClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onCircleClick(com.google.android.gms.maps.model.Circle param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onCircleClick", void.class, args);
	}

}
