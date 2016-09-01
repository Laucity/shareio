package com.shareio;

import android.app.Application;
import android.util.Log;

import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.FacebookSdk;

import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
    AppEventsLogger.activateApp(this);
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNSpinkitPackage(),
          new ReactMaterialKitPackage(),
          new VectorIconsPackage(),
          new FacebookLoginPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
